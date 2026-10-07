(function () {
  const cfg = window.SITE_CONFIG || {};
  const dict = window.I18N;
  const STORAGE_KEY = "cmc-lang";

  function pickInitialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && dict[fromUrl]) return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && dict[saved]) return saved;
    } catch (e) { /* storage unavailable */ }
    return (navigator.language || "en").toLowerCase().startsWith("fr") ? "fr" : "en";
  }

  function t(lang, key) {
    const s = (dict[lang] && dict[lang][key]) ?? dict.en[key] ?? key;
    return s.replace("{founder}", cfg.founderName || "").replace("{company}", cfg.companyName || "");
  }

  let lang = pickInitialLang();

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }

    document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(lang, el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(lang, el.dataset.i18nHtml); });
    // Config values may be plain strings or per-language objects ({ en, fr })
    document.querySelectorAll("[data-cfg]").forEach(el => {
      const val = el.dataset.cfg.split(".").reduce((o, k) => o?.[k], cfg);
      el.textContent = (val && typeof val === "object") ? (val[lang] ?? val.en) : (val ?? "");
    });
    document.querySelectorAll(".lang-switch button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    const titleKey = document.body.dataset.titleKey;
    if (titleKey) document.title = t(lang, titleKey) + " — " + cfg.companyName;

    renderGames();
    renderSupport();
  }

  function renderSupport() {
    const list = document.getElementById("support-list");
    if (!list) return;
    const games = (window.GAMES || []).filter(g => g.supportEmail);
    list.innerHTML = games.length
      ? `<dl>${games.map(g => `<dt id="support-${esc(g.slug)}">${esc(g.name)}</dt><dd><a href="mailto:${esc(g.supportEmail)}">${esc(g.supportEmail)}</a></dd>`).join("")}</dl>`
      : `<p><em>${esc(t(lang, "support.empty"))}</em></p>`;
  }

  // ── Games ──────────────────────────────────────────────
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function renderGames() {
    const grid = document.getElementById("games-grid");
    if (!grid) return;
    const games = window.GAMES || [];
    if (!games.length) {
      grid.innerHTML = `<div class="game-empty"><strong>${esc(t(lang, "games.empty.title"))}</strong>${esc(t(lang, "games.empty.text"))}</div>`;
      return;
    }
    grid.innerHTML = games.map(g => {
      const live = g.status === "live";
      const icon = g.icon
        ? `<img class="game-icon" src="${esc(g.icon)}" alt="">`
        : `<div class="game-icon placeholder">${esc(g.name.charAt(0))}</div>`;
      const shots = (g.screenshots || []).length
        ? `<div class="shots">${g.screenshots.map(s => `<img src="${esc(s)}" alt="${esc(g.name)}" loading="lazy">`).join("")}</div>`
        : "";
      const links = [
        live && g.appStoreUrl
          ? `<a class="btn btn-primary" href="${esc(g.appStoreUrl)}" target="_blank" rel="noopener">${esc(t(lang, "games.appstore"))}</a>` : "",
        g.privacyUrl ? `<a class="btn btn-ghost" href="${esc(g.privacyUrl)}">${esc(t(lang, "games.privacy"))}</a>` : "",
        g.supportEmail ? `<a class="btn btn-ghost" href="support.html#support-${esc(g.slug)}">${esc(t(lang, "games.support"))}</a>` : ""
      ].join("");
      return `
        <article class="game" id="game-${esc(g.slug)}">
          <div class="game-head">
            ${icon}
            <div>
              <h4>${esc(g.name)}</h4>
              <div class="game-tag">${esc(g.genre?.[lang] ?? g.genre?.en ?? "")}</div>
              <span class="badge ${live ? "badge-live" : "badge-soon"}">${esc(t(lang, live ? "games.live" : "games.soon"))}</span>
            </div>
          </div>
          <div class="game-body">
            <p>${esc(g.description?.[lang] ?? g.description?.en ?? "")}</p>
            ${shots}
            <div class="game-links">${links}</div>
          </div>
        </article>`;
    }).join("");
  }

  // ── Lightbox for screenshots ───────────────────────────
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML = "<img alt=''>";
  document.body.appendChild(lb);
  lb.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });
  document.addEventListener("click", e => {
    const img = e.target.closest(".shots img");
    if (!img) return;
    lb.querySelector("img").src = img.src;
    lb.classList.add("open");
  });

  // ── Config-driven bits ────────────────────────────────
  document.querySelectorAll("#contact-email, [data-mailto]").forEach(a => {
    a.href = "mailto:" + cfg.contactEmail;
    if (a.dataset.mailto !== undefined) a.textContent = cfg.contactEmail;
  });
  const emailBtn = document.getElementById("contact-email");
  if (emailBtn) emailBtn.setAttribute("data-i18n", "contact.email");
  const li = document.getElementById("contact-linkedin");
  if (li) { if (cfg.linkedinUrl) li.href = cfg.linkedinUrl; else li.remove(); }
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // ── Nav ────────────────────────────────────────────────
  document.querySelectorAll(".lang-switch button").forEach(b => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", e => { if (e.target.tagName === "A") links.classList.remove("open"); });
  }

  applyLang(lang);
})();
