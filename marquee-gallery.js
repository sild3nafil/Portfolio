function initMarqueeGallery() {
  const gallery = document.querySelector(".marquee-gallery");

  if (!gallery || !gallery.children.length) return;

  // 防止重複初始化
  if (gallery.dataset.marqueeReady === "true") return;
  gallery.dataset.marqueeReady = "true";

  const originals = [...gallery.children];

  let cycleWidth = 0;
  let initialized = false;

  let dragging = false;
  let dragStartX = 0;
  let dragStartScroll = 0;

  let pausedUntil = 0;

  const SPEED = 25;


  /* =========================
     複製圖片
     ========================= */

  function cloneCycle() {
    return originals.map(item => {
      const clone = item.cloneNode(true);

      clone.setAttribute("aria-hidden", "true");

      return clone;
    });
  }


  // 前面一組
  gallery.prepend(...cloneCycle());


  // 後面多放幾組，避免拖曳到底
  for (let i = 0; i < 6; i++) {
    gallery.append(...cloneCycle());
  }


  /* =========================
     計算一輪真正寬度
     ========================= */

  function calculateCycleWidth() {
    const style = getComputedStyle(gallery);

    const gap =
      parseFloat(style.columnGap || style.gap) || 0;

    return originals.reduce((total, item) => {
      return (
        total +
        item.getBoundingClientRect().width +
        gap
      );
    }, 0);
  }


  function updateCycleWidth() {
    const newWidth = calculateCycleWidth();

    if (newWidth <= 0) return;

    cycleWidth = newWidth;

    // 第一次計算完成才決定起始位置
    if (!initialized) {
      gallery.scrollLeft = cycleWidth;
      initialized = true;
    }
  }


  /*
    等瀏覽器先完成 HTML + CSS layout
    不用等所有圖片 decode
  */

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      updateCycleWidth();
    });
  });


  /* 圖片尺寸改變時重新計算 */

  const resizeObserver = new ResizeObserver(() => {
    updateCycleWidth();
  });

  originals.forEach(item => {
    resizeObserver.observe(item);
  });


  /* =========================
     無縫循環
     ========================= */

  function normalizeScroll() {
    if (!cycleWidth || dragging) return;

    /*
      一旦進入下一輪，
      搬回完全相同的上一輪位置
    */

    if (gallery.scrollLeft >= cycleWidth * 2) {
      gallery.scrollLeft -= cycleWidth;
    }

    /*
      往左拖太遠則搬回下一輪
    */

    if (gallery.scrollLeft < cycleWidth * 0.5) {
      gallery.scrollLeft += cycleWidth;
    }
  }


  /* =========================
     自動移動
     ========================= */

  let lastTime = performance.now();

  function animate(now) {
    const delta = Math.min(
      (now - lastTime) / 1000,
      0.05
    );

    lastTime = now;

    if (
      initialized &&
      !dragging &&
      now >= pausedUntil
    ) {
      gallery.scrollLeft += SPEED * delta;

      normalizeScroll();
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);


  /* =========================
     滑鼠拖曳
     ========================= */

  gallery.addEventListener("pointerdown", e => {
    if (e.pointerType !== "mouse") return;

    dragging = true;

    dragStartX = e.clientX;
    dragStartScroll = gallery.scrollLeft;

    gallery.classList.add("is-dragging");

    gallery.setPointerCapture(e.pointerId);
  });


  gallery.addEventListener("pointermove", e => {
    if (!dragging) return;

    e.preventDefault();

    const distance =
      e.clientX - dragStartX;

    gallery.scrollLeft =
      dragStartScroll - distance;

    /*
      注意：
      拖曳過程不要 normalize！
      否則跨循環點時容易反覆跳動。
    */
  });


  function endDrag(e) {
    if (!dragging) return;

    dragging = false;

    gallery.classList.remove("is-dragging");

    if (
      gallery.hasPointerCapture &&
      gallery.hasPointerCapture(e.pointerId)
    ) {
      gallery.releasePointerCapture(e.pointerId);
    }

    // 放手之後才重新整理循環位置
    normalizeScroll();

    // 0.15 秒後重新自動移動
    pausedUntil =
      performance.now() + 150;
  }


  gallery.addEventListener(
    "pointerup",
    endDrag
  );

  gallery.addEventListener(
    "pointercancel",
    endDrag
  );


  /* =========================
     手機觸控
     ========================= */

  gallery.addEventListener(
    "touchstart",
    () => {
      pausedUntil = Infinity;
    },
    { passive: true }
  );

  gallery.addEventListener(
    "touchend",
    () => {
      normalizeScroll();

      pausedUntil =
        performance.now() + 150;
    },
    { passive: true }
  );
}