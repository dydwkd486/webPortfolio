import { portfolioContent } from "./site-content.js";

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderFacts = () => {
  const root = document.querySelector("#hero-facts");
  if (!root) return;

  root.innerHTML = portfolioContent.facts
    .map(
      (fact) => `
        <div class="fact-row">
          <dt>${fact.label}</dt>
          <dd>${fact.value}</dd>
        </div>
      `,
    )
    .join("");
};

const renderStats = () => {
  const root = document.querySelector("#stat-grid");
  if (!root) return;

  root.innerHTML = portfolioContent.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <strong>${stat.value}</strong>
          <span>${stat.label}</span>
        </div>
      `,
    )
    .join("");
};

const renderPills = () => {
  const root = document.querySelector("#fit-pill-row");
  if (!root) return;

  root.innerHTML = portfolioContent.fitPills
    .map((item) => `<span class="pill">${item}</span>`)
    .join("");
};

const renderStrengths = () => {
  const root = document.querySelector("#strength-grid");
  if (!root) return;

  root.innerHTML = portfolioContent.strengths
    .map(
      (item) => `
        <article class="highlight-card" data-reveal>
          <p class="card-kicker">Highlight</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
};

const renderSkills = () => {
  const root = document.querySelector("#skill-grid");
  if (!root) return;

  root.innerHTML = portfolioContent.skills
    .map(
      (group) => `
        <article class="skill-row" data-reveal>
          <h3 class="skill-label">${group.title}</h3>
          <div class="skill-tags">
            ${group.items
              .map((item, index) => `<span class="skill-tag skill-tag-${(index % 6) + 1}">${item}</span>`)
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
};

const renderProjects = () => {
  const root = document.querySelector("#project-grid");
  if (!root) return;

  root.innerHTML = portfolioContent.projects
    .map(
      (project, index) => `
        <article class="project-card" data-reveal>
          <div>
            <div class="project-header">
              <span class="project-badge">${project.badge}</span>
              <span class="project-meta">${project.period}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="pill-row">
              ${project.pills.map((pill) => `<span class="pill">${pill}</span>`).join("")}
            </div>
          </div>
          <div class="project-detail">
            <div class="project-note">
              <strong>${project.impactTitle}</strong>
              <p>${project.impact}</p>
            </div>
            <button class="button button-secondary project-more-button" type="button" data-project-index="${index}">
              더보기
            </button>
          </div>
        </article>
      `,
    )
    .join("");
};

const getProjectModal = () => {
  let modal = document.querySelector("#project-modal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "project-modal";
  modal.id = "project-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="project-modal-backdrop" data-modal-close></div>
    <section
      class="project-modal-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      tabindex="-1"
    >
      <button class="project-modal-close" type="button" aria-label="상세 팝업 닫기" data-modal-close>
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="project-modal-content"></div>
    </section>
  `;
  document.body.append(modal);
  return modal;
};

const renderProjectModalContent = (project) => {
  const detail = project.detail || {};
  const tasks = detail.tasks || [];
  const image = detail.image || {};
  const imageCaption = image.caption || "프로젝트 이미지를 넣을 수 있는 공간입니다.";
  const mediaMarkup = image.src
    ? `
      <figure class="project-modal-media">
        <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt || project.title)}" />
        <figcaption>${escapeHtml(imageCaption)}</figcaption>
      </figure>
    `
    : `
      <figure class="project-modal-media project-modal-media-empty">
        <div class="project-modal-image-placeholder" aria-hidden="true">
          <span>이미지 영역</span>
        </div>
        <figcaption>${escapeHtml(imageCaption)}</figcaption>
      </figure>
    `;

  return `
    <div class="project-modal-head">
      <span class="project-badge">${escapeHtml(project.badge)}</span>
      <span class="project-meta">${escapeHtml(project.period)}</span>
    </div>
    <h2 id="project-modal-title">${escapeHtml(project.title)}</h2>
    ${mediaMarkup}
    <p class="project-modal-description">${escapeHtml(detail.overview || project.description)}</p>
    <div class="project-modal-grid">
      <div class="project-modal-section">
        <strong>맡은 일</strong>
        <ul>
          ${tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
        </ul>
      </div>
      <div class="project-modal-section">
        <strong>성과와 배운 점</strong>
        <p>${escapeHtml(detail.result || project.impact)}</p>
      </div>
    </div>
    <div class="pill-row">
      ${project.pills.map((pill) => `<span class="pill">${escapeHtml(pill)}</span>`).join("")}
    </div>
  `;
};

const closeProjectModal = () => {
  const modal = document.querySelector("#project-modal");
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-modal-open");
};

const openProjectModal = (project) => {
  const modal = getProjectModal();
  const content = modal.querySelector(".project-modal-content");
  const panel = modal.querySelector(".project-modal-panel");
  if (!content || !panel) return;

  content.innerHTML = renderProjectModalContent(project);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-modal-open");
  panel.focus();
};

const bindProjectModal = () => {
  const root = document.querySelector("#project-grid");
  if (!root) return;

  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-index]");
    if (!button) return;

    const project = portfolioContent.projects[Number(button.dataset.projectIndex)];
    if (project) {
      openProjectModal(project);
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });
};

const renderCareer = () => {
  const root = document.querySelector("#career-grid");
  if (!root) return;

  root.innerHTML = portfolioContent.career
    .map(
      (item) => `
        <article class="career-card" data-reveal>
          <div class="career-company">
            <p class="career-period">${item.period}</p>
            <h3>${item.company}</h3>
            <p class="career-summary">${item.summary}</p>
          </div>
          <div class="career-role-list">
            ${item.roles
              .map(
                (role) => `
                  <div class="career-role">
                    <strong>${role}</strong>
                  </div>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
};

const renderTimeline = () => {
  const root = document.querySelector("#timeline");
  if (!root) return;

  root.innerHTML = portfolioContent.process
    .map(
      (item) => `
        <article class="timeline-card" data-reveal>
          <span class="timeline-step">${item.step}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");
};

const renderContacts = () => {
  const root = document.querySelector("#contact-links");
  if (!root) return;

  root.innerHTML = portfolioContent.contactLinks
    .map(
      (link, index) => `
        <a
          class="button ${index === 0 ? "button-primary" : index === 1 ? "button-secondary" : "button-ghost"}"
          href="${link.href}"
          ${link.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}
        >
          ${link.label}
        </a>
      `,
    )
    .join("");
};

const bindNav = () => {
  const button = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const next = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", next);
    button.setAttribute("aria-expanded", String(next));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      button.setAttribute("aria-expanded", "false");
    });
  });
};

const bindReveal = () => {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 },
  );

  items.forEach((item) => observer.observe(item));
};

const boot = () => {
  const { meta, profile } = portfolioContent;

  document.title = meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", meta.description);
  }

  setText("[data-name]", profile.name);
  setText("[data-role]", profile.role);
  setText("[data-tagline]", profile.tagline);
  setText("[data-summary]", profile.summary);
  setText("[data-story]", profile.story);
  setText("[data-why-karrot]", profile.whyKarrot);

  renderFacts();
  renderStats();
  renderPills();
  renderStrengths();
  renderSkills();
  renderProjects();
  bindProjectModal();
  renderCareer();
  renderTimeline();
  renderContacts();
  bindNav();
  bindReveal();

  const year = document.querySelector("#current-year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
};

boot();
