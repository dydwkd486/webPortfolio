import { portfolioContent } from "./site-content.js";

const setText = (selector, value) => {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
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
        <article class="feature-card" data-reveal>
          <p class="panel-label">Strength</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
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
      (project) => `
        <article class="project-card" data-reveal>
          <div class="project-topline">
            <span class="project-badge">${project.badge}</span>
            <span class="project-year">${project.year}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="pill-row">
            ${project.pills.map((pill) => `<span class="pill">${pill}</span>`).join("")}
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
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  items.forEach((item) => observer.observe(item));
};

const boot = () => {
  const { profile } = portfolioContent;
  const isHomePage = document.body.classList.contains("page-home");

  if (isHomePage && portfolioContent.meta) {
    document.title = portfolioContent.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", portfolioContent.meta.description);
    }
  }

  setText("[data-name]", profile.name);
  setText("[data-role]", profile.role);
  setText("[data-tagline]", profile.tagline);
  setText("[data-summary]", profile.summary);
  setText("[data-story]", profile.story);
  setText("[data-why-karrot]", profile.whyKarrot);

  renderStats();
  renderPills();
  renderStrengths();
  renderProjects();
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
