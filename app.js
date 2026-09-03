const state = {
  imageIndexes: {}
};

const mainGrid = document.querySelector("#main-project-grid");
const sideGrid = document.querySelector("#side-project-grid");
const archiveGrid = document.querySelector("#archive-grid");
const sideResultCount = document.querySelector("#side-result-count");

const sideProjectTitles = new Set([
  "Green Level 3D-Printed Keychains",
  "Dropbox Hitch Cover",
  "Track Spike",
  "DECA Product Presentation Model",
  "College Logo Keychains",
  "Alpha Tau Omega Can Opener",
  "Berserk Chain Pendant"
]);

const mainProjectTitles = new Set([
  "Grace Intelligence Sensor Logger Internship"
]);

function projectKey(project) {
  return project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function isSideProject(project) {
  return sideProjectTitles.has(project.title);
}

function isMainProject(project) {
  return mainProjectTitles.has(project.title);
}

function fallbackVisual(project) {
  return `
    <div class="project-visual fallback-visual" aria-hidden="true">
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
  const fitClass = activeImage.fit === "tall" ? " image-visual-tall" : "";
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

  return `
    <div class="project-visual image-visual${fitClass}">
      <img src="${activeImage.src}" alt="${activeImage.alt || project.title}" loading="lazy">
      ${controls}
    </div>
  `;
}

function meta(project) {
  return `
    <div class="project-meta">
      <span>${project.status}</span>
      <span class="project-context">${project.context || "Personal"}</span>
      <span>${project.year}</span>
    </div>
  `;
}

function tagList(project) {
  return `
    <div class="tag-list">
      ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
    </div>
  `;
}

function projectLinks(project) {
  if (!project.links || project.links.length === 0) {
    return "";
  }

  return `
    <div class="project-links">
      ${project.links
        .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
        .join("")}
    </div>
  `;
}

function projectCard(project, variant = "standard") {
  const article = document.createElement("article");
  article.className = `project-card project-card-${variant} project-${projectKey(project)} accent-${project.accent}`;

  article.innerHTML = `
    ${projectVisual(project)}
    <div class="project-body">
      ${meta(project)}
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
      ${tagList(project)}
      ${projectLinks(project)}
    </div>
  `;

  return article;
}

function compactCard(project) {
  const article = document.createElement("article");
  article.className = `project-card project-card-compact project-${projectKey(project)} accent-${project.accent}`;

  article.innerHTML = `
    ${projectVisual(project)}
    <div class="project-body">
      ${meta(project)}
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      ${tagList(project)}
      ${projectLinks(project)}
    </div>
  `;

  return article;
}

function render() {
  const sideProjects = projects.filter(isSideProject);
  const mainProjects = projects.filter(isMainProject);
  const archivedProjects = projects.filter(
    (project) => !isSideProject(project) && !isMainProject(project)
  );

  mainGrid.replaceChildren(
    ...mainProjects.map((project) => projectCard(project, "main"))
  );
  sideGrid.replaceChildren(...sideProjects.map(compactCard));
  archiveGrid.replaceChildren(...archivedProjects.map(compactCard));
  sideResultCount.textContent = `${sideProjects.length} ${
    sideProjects.length === 1 ? "3D print" : "3D prints"
  }`;
}

function handleGalleryClick(event) {
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
}

sideGrid.addEventListener("click", handleGalleryClick);
archiveGrid.addEventListener("click", handleGalleryClick);
mainGrid.addEventListener("click", handleGalleryClick);

render();
