const state = {
  tag: "All",
  status: "All",
  search: "",
  imageIndexes: {}
};

const grid = document.querySelector("#project-grid");
const tagFilters = document.querySelector("#tag-filters");
const statusFilters = document.querySelector("#status-filters");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const searchInput = document.querySelector("#project-search");
const clearFilters = document.querySelector("#clear-filters");

const unique = (items) => [...new Set(items)].sort((a, b) => a.localeCompare(b));
const allTags = unique(projects.flatMap((project) => project.tags));
const allStatuses = unique(projects.map((project) => project.status));
const allTools = unique(projects.flatMap((project) => project.tools));
const projectKey = (project) => project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function createFilterButton(label, type) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "filter-chip";
  button.textContent = label;
  button.setAttribute("aria-pressed", String(state[type] === label));
  button.addEventListener("click", () => {
    state[type] = label;
    render();
  });
  return button;
}

function renderFilters() {
  tagFilters.replaceChildren(
    ...["All", ...allTags].map((tag) => createFilterButton(tag, "tag"))
  );
  statusFilters.replaceChildren(
    ...["All", ...allStatuses].map((status) => createFilterButton(status, "status"))
  );
}

function projectMatches(project) {
  const searchable = [
    project.title,
    project.summary,
    project.status,
    project.context,
    project.year,
    project.role,
    project.highlight,
    ...project.tags,
    ...project.tools
  ]
    .join(" ")
    .toLowerCase();

  const tagMatch = state.tag === "All" || project.tags.includes(state.tag);
  const statusMatch = state.status === "All" || project.status === state.status;
  const searchMatch = searchable.includes(state.search.trim().toLowerCase());

  return tagMatch && statusMatch && searchMatch;
}

function fallbackVisual(project) {
  return `
    <div class="project-visual fallback-visual" aria-hidden="true">
      <span class="visual-node node-a"></span>
      <span class="visual-node node-b"></span>
      <span class="visual-node node-c"></span>
      <span class="visual-line line-a"></span>
      <span class="visual-line line-b"></span>
      <span class="visual-badge">${project.tags[0]}</span>
    </div>
  `;
}

function projectVisual(project) {
  if (!project.images || project.images.length === 0) {
    return fallbackVisual(project);
  }

  const key = projectKey(project);
  const activeIndex = state.imageIndexes[key] || 0;
  const activeImage = project.images[activeIndex] || project.images[0];
  const controls =
    project.images.length > 1
      ? `
        <div class="gallery-controls" aria-label="${project.title} image controls">
          <button class="gallery-button" type="button" data-gallery-action="prev" data-project-key="${key}" aria-label="Previous ${project.title} image">&lsaquo;</button>
          <span>${activeIndex + 1} / ${project.images.length}</span>
          <button class="gallery-button" type="button" data-gallery-action="next" data-project-key="${key}" aria-label="Next ${project.title} image">&rsaquo;</button>
        </div>
      `
      : "";

  const fitClass = activeImage.fit === "tall" ? " image-visual-tall" : "";

  return `
    <div class="project-visual image-visual${fitClass}">
      <img src="${activeImage.src}" alt="${activeImage.alt || project.title}" loading="lazy">
      ${controls}
    </div>
  `;
}

function projectCard(project) {
  const article = document.createElement("article");
  article.className = `project-card accent-${project.accent}`;

  const links = project.links
    .map((link) => `<a href="${link.url}" aria-label="${project.title} ${link.label}">${link.label}</a>`)
    .join("");
  const projectLinks = links ? `<div class="project-links">${links}</div>` : "";

  article.innerHTML = `
    ${projectVisual(project)}
    <div class="project-body">
      <div class="project-meta">
        <span>${project.status}</span>
        <span class="project-context">${project.context || "Personal"}</span>
        <span>${project.year}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <dl>
        <div>
          <dt>Role</dt>
          <dd>${project.role}</dd>
        </div>
        <div>
          <dt>Highlight</dt>
          <dd>${project.highlight}</dd>
        </div>
      </dl>
      <div class="tag-list">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="tool-list">
        ${project.tools.map((tool) => `<span>${tool}</span>`).join("")}
      </div>
      ${projectLinks}
    </div>
  `;

  return article;
}

function updateStats() {
  document.querySelector("#total-projects").textContent = projects.length;
  document.querySelector("#total-tools").textContent = allTools.length;
  document.querySelector("#total-categories").textContent = allTags.length;
}

function render() {
  renderFilters();
  const visibleProjects = projects.filter(projectMatches);

  grid.replaceChildren(...visibleProjects.map(projectCard));
  resultCount.textContent = `Showing ${visibleProjects.length} ${
    visibleProjects.length === 1 ? "project" : "projects"
  }`;
  emptyState.hidden = visibleProjects.length > 0;
}

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  render();
});

clearFilters.addEventListener("click", () => {
  state.tag = "All";
  state.status = "All";
  state.search = "";
  searchInput.value = "";
  render();
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gallery-action]");

  if (!button) {
    return;
  }

  const project = projects.find((item) => projectKey(item) === button.dataset.projectKey);

  if (!project || !project.images || project.images.length < 2) {
    return;
  }

  const key = projectKey(project);
  const currentIndex = state.imageIndexes[key] || 0;
  const direction = button.dataset.galleryAction === "next" ? 1 : -1;
  state.imageIndexes[key] =
    (currentIndex + direction + project.images.length) % project.images.length;
  render();
});

updateStats();
render();
