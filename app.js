
const list = document.getElementById("workList");
const pager = document.getElementById("pagination");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const PER_PAGE = 6;

menuBtn?.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

function getPage(){
  const p = Number(new URLSearchParams(location.search).get("page")) || 1;
  return Math.max(1, Math.min(p, Math.ceil(WORKS.length / PER_PAGE)));
}

function render(){
  const page = getPage();
  const start = (page - 1) * PER_PAGE;
  const items = WORKS.slice(start, start + PER_PAGE);

  list.innerHTML = items.map(work => `
    <a class="work-card" href="work.html?id=${work.id}&page=${page}">
      <div class="work-cover">
        <img
          src="${work.cover}"
          alt="${work.title}"
          loading="lazy"
          class="${work.coverFit === "contain" ? "contain" : ""}"
        >
      </div>
      <div class="work-info">
        <h2>${work.title}</h2>
        <div class="meta">
          <span>${work.category}</span>
          <span>|</span>
          <span>${work.date}</span>
        </div>
      </div>
    </a>
  `).join("");

  const pages = Math.ceil(WORKS.length / PER_PAGE);
  pager.innerHTML = pages <= 1 ? "" :
    Array.from({length: pages}, (_, i) => i + 1).map(n => `
      <button class="${n === page ? "active" : ""}" data-page="${n}" aria-label="第 ${n} 頁">${n}</button>
    `).join("");

  pager.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = btn.dataset.page;
      history.pushState({}, "", `?page=${p}`);
      render();
      window.scrollTo({top: 0, behavior: "smooth"});
    });
  });
}
window.addEventListener("popstate", render);
render();
