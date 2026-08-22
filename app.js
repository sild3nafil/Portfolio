const list = document.getElementById("workList");
const pager = document.getElementById("pagination");

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

const sortDropdown = document.getElementById("sortDropdown");
const sortTrigger = document.getElementById("sortTrigger");
const sortCurrent = document.getElementById("sortCurrent");
const sortOptions = document.querySelectorAll(".sort-menu button");

const PER_PAGE = 6;

/* =========================
   Custom Sort Dropdown
========================= */

sortTrigger?.addEventListener("click", () => {

  const open =
    sortDropdown.classList.toggle("open");

  sortTrigger.setAttribute(
    "aria-expanded",
    open ? "true" : "false"
  );

});


/* 點選排序方式 */

sortOptions.forEach(option => {

  option.addEventListener("click", () => {

    const sort =
      option.dataset.sort;

    history.pushState(
      {},
      "",
      buildUrl(1, sort)
    );

    sortDropdown.classList.remove("open");

    sortTrigger.setAttribute(
      "aria-expanded",
      "false"
    );

    render();

  });

});


/* 點選其他地方 → 關閉選單 */

document.addEventListener("click", e => {

  if(
    sortDropdown &&
    !sortDropdown.contains(e.target)
  ){
    sortDropdown.classList.remove("open");

    sortTrigger?.setAttribute(
      "aria-expanded",
      "false"
    );
  }

});


/* ESC → 關閉 */

document.addEventListener("keydown", e => {

  if(e.key === "Escape"){

    sortDropdown?.classList.remove("open");

    sortTrigger?.setAttribute(
      "aria-expanded",
      "false"
    );

  }

});


/* =========================
   Menu
========================= */

menuBtn?.addEventListener("click", () => {

  const open = menu.classList.toggle("open");

  menuBtn.setAttribute(
    "aria-expanded",
    open ? "true" : "false"
  );

});

menu?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    smoothScrollTo(target, 600);
  });
});

function smoothScrollTo(target, duration = 800) {
  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}


/* =========================
   Sort
========================= */

function getSort(){

  const sort =
    new URLSearchParams(location.search).get("sort");

  if(sort === "newest" || sort === "oldest"){
    return sort;
  }

  return "default";
}


function getSortedWorks(){

  const sort = getSort();

  /* 複製 WORKS，避免改到原始 data.js 順序 */
  const works = [...WORKS];

  if(sort === "newest"){

    works.sort(
      (a, b) => Number(b.date) - Number(a.date)
    );

  }

  else if(sort === "oldest"){

    works.sort(
      (a, b) => Number(a.date) - Number(b.date)
    );

  }

  return works;
}


/* =========================
   Page
========================= */

function getPage(totalItems){

  const p =
    Number(
      new URLSearchParams(location.search).get("page")
    ) || 1;

  const totalPages =
    Math.ceil(totalItems / PER_PAGE);

  return Math.max(
    1,
    Math.min(p, totalPages)
  );
}


/* 建立首頁網址 */

function buildUrl(page, sort){

  const params = new URLSearchParams();

  if(page > 1){
    params.set("page", page);
  }

  if(sort !== "default"){
    params.set("sort", sort);
  }

  const query = params.toString();

  return query ? `?${query}` : location.pathname;
}


/* =========================
   Render
========================= */

function render(){

  const sort = getSort();

  /* 同步 select */
  const sortNames = {
    default: "Default",
    newest: "Newest First",
    oldest: "Oldest First"
  };

  if(sortCurrent){
    sortCurrent.textContent = sortNames[sort];
  }


  /* 更新目前選中的狀態 */

  sortOptions.forEach(option => {

    option.classList.toggle(
      "active",
      option.dataset.sort === sort
    );

  });


  /* 先排序 */
  const sortedWorks = getSortedWorks();


  /* 再分頁 */
  const page = getPage(sortedWorks.length);

  const start =
    (page - 1) * PER_PAGE;

  const items =
    sortedWorks.slice(
      start,
      start + PER_PAGE
    );


  /* =========================
     Work Cards
  ========================= */

  list.innerHTML = items.map(work => {

    const sortQuery =
      sort !== "default"
        ? `&sort=${sort}`
        : "";

    return `
      <a
        class="work-card"
        href="work.html?id=${work.id}&page=${page}${sortQuery}"
      >

        <div class="work-cover">

          <img
            src="${work.cover}"
            alt="${work.title}"
            loading="lazy"
            class="${work.coverFit === "contain" ? "contain" : ""}"
          >

        </div>

        <div class="work-info">

          <h2>
            <span>${work.title}</span>
            <span class="work-arrow">↗</span>
          </h2>

          <div class="meta">

            <span>${work.category}</span>

            <span>|</span>

            <span>${work.date}</span>

          </div>

        </div>

      </a>
    `;

  }).join("");


  /* =========================
     Pagination
  ========================= */

  const pages =
    Math.ceil(sortedWorks.length / PER_PAGE);


  pager.innerHTML =
    pages <= 1
      ? ""
      : Array
          .from(
            { length: pages },
            (_, i) => i + 1
          )
          .map(n => `

            <button
              class="${n === page ? "active" : ""}"
              data-page="${n}"
              aria-label="第 ${n} 頁"
            >
              ${n}
            </button>

          `)
          .join("");


  pager
    .querySelectorAll("button")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        const p =
          Number(btn.dataset.page);

        history.pushState(
          {},
          "",
          buildUrl(p, sort)
        );

        render();

        window.scrollTo({
          top:0,
          behavior:"smooth"
        });

      });

    });

}

/* 瀏覽器上一頁 / 下一頁 */
window.addEventListener(
  "popstate",
  render
);

/* Doodle */
const canvas = document.getElementById("doodleCanvas");

if(canvas){

  const ctx = canvas.getContext("2d");

  const drawToggle = document.getElementById("drawToggle");
  const undoButton = document.getElementById("undoDrawing");
  const clearButton = document.getElementById("clearDrawing");
  const doneButton = document.getElementById("doneDrawing");

  let drawMode = false;
  let drawing = false;

  let currentStroke = [];
  let strokes = [];


  function resizeCanvas(){

    const ratio = window.devicePixelRatio || 1;

    const footer = document.querySelector("footer");

    const width = document.documentElement.clientWidth;

    let height;

    if(footer){
      height =
        footer.getBoundingClientRect().bottom +
        window.scrollY;
    }else{
      height = document.body.offsetHeight;
    }

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(
      ratio,
      0,
      0,
      ratio,
      0,
      0
    );

    redraw();
  }


  function drawStroke(points){

    if(points.length < 2) return;

    ctx.beginPath();

    ctx.moveTo(
      points[0].x,
      points[0].y
    );

    for(let i = 1; i < points.length; i++){

      ctx.lineTo(
        points[i].x,
        points[i].y
      );
    }

    ctx.stroke();
  }


  function redraw(){

    ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#111";

    strokes.forEach(drawStroke);
  }


  drawToggle.addEventListener("click", () => {

    drawMode = !drawMode;

    document.body.classList.toggle(
      "draw-mode",
      drawMode
    );
  });


  doneButton.addEventListener("click", () => {

    drawMode = false;

    document.body.classList.remove(
      "draw-mode"
    );
  });


  canvas.addEventListener("pointerdown", e => {

    if(!drawMode) return;

    drawing = true;

    currentStroke = [
      {
        x:e.pageX,
        y:e.pageY
      }
    ];

    canvas.setPointerCapture(e.pointerId);
  });


  canvas.addEventListener("pointermove", e => {

    if(!drawing) return;

    currentStroke.push({
      x:e.pageX,
      y:e.pageY
    });

    redraw();
    drawStroke(currentStroke);
  });


  canvas.addEventListener("pointerup", () => {

    if(!drawing) return;

    drawing = false;

    strokes.push(currentStroke);
    currentStroke = [];
  });


  undoButton.addEventListener("click", () => {

    strokes.pop();

    redraw();
  });


  clearButton.addEventListener("click", () => {

    strokes = [];

    redraw();
  });


  window.addEventListener("resize", resizeCanvas);

  /* 等所有圖片載入完成後，再重新抓一次完整頁面高度 */
  window.addEventListener("load", resizeCanvas);

  /* 網頁內容高度改變時，自動更新 Canvas */
  const canvasResizeObserver = new ResizeObserver(() => {
    resizeCanvas();
  });

  canvasResizeObserver.observe(document.body);

  resizeCanvas();
}



render();