/* =============================================================
   GIGI'S ATELIER — SCRIPT
   Renders all data-driven content (projects, services, process,
   blog, FAQ) and wires up every interactive feature: mobile nav,
   smooth-scroll CTAs, portfolio filtering + case studies, the
   contact form, and scroll-in animations.

   No inline "onclick" / "style" attributes are used anywhere —
   every interaction is attached here via addEventListener.
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* -----------------------------------------------------------
     1. DATA
     Single source of truth for all repeating content blocks.
     Swap/extend these arrays to update the site's content.
     ----------------------------------------------------------- */

  const PALETTE = ['#1E5C4A', '#C93574', '#3E9FD1', '#93AE45', '#B99B6E', '#2E7A63'];

  const projects = [
    {
      cat: 'Packaging', client: 'Noor & Co.', title: 'Noor & Co. — Oil Packaging',
      tag: 'Packaging', spec: 'FSC BOARD / SOFT-TOUCH', color: PALETTE[0],
      desc: 'A packaging system for a small-batch olive oil producer entering retail for the first time.',
      challenge: 'Noor & Co. needed shelf presence against established competitors without losing their handmade, small-batch story.',
      solution: 'We developed a structural carton with a debossed emblem and a restrained two-color print system that reads premium at a distance and personal up close.',
      results: 'Placed in 40+ specialty retailers within six months of launch; repeat wholesale orders up 3x.',
      deliverables: 'Structural design, print files, brand pattern, retail signage.'
    },
    {
      cat: 'Branding', client: 'Wildflower Press', title: 'Wildflower Press — Identity',
      tag: 'Branding', spec: 'IDENTITY SYSTEM', color: PALETTE[1],
      desc: 'Full identity for an independent publisher of poetry and short fiction.',
      challenge: 'The press needed an identity flexible enough to cover dozens of future book covers while staying recognizably one publisher.',
      solution: 'A modular mark and a typographic system built around a single custom serif, with a cover template framework rather than a fixed layout.',
      results: 'Identity now spans 24 published titles with zero design drift.',
      deliverables: 'Logo suite, type system, cover templates, brand guidelines.'
    },
    {
      cat: 'Labels', client: 'Ember Studio', title: 'Ember Studio — Candle Labels',
      tag: 'Labels', spec: 'PMS 7526C / MATTE', color: PALETTE[2],
      desc: 'Label and jar design for a small-batch candle maker expanding into three new scent lines.',
      challenge: 'Existing labels didn\'t differentiate scent families and looked inconsistent across the product line.',
      solution: 'A coded color system by scent family with a shared layout grid, so new scents can be added without redesign.',
      results: 'Line expanded from 4 to 11 SKUs using the same design system, with zero added design cost.',
      deliverables: 'Label artwork, color-coding system, production specs.'
    },
    {
      cat: 'Print', client: 'Fielding Co.', title: 'Fielding Co. — Catalog',
      tag: 'Print', spec: 'OFFSET / UNCOATED', color: PALETTE[3],
      desc: 'A seasonal print catalog for a home goods brand sold through independent retailers.',
      challenge: 'The brand needed a catalog that felt editorial, not transactional, to match their positioning.',
      solution: 'An editorial grid with generous white space, mixing product photography with short essays on materials and process.',
      results: 'Wholesale order value up 22% during the season the catalog was distributed.',
      deliverables: '32-page catalog, print production files, order-form insert.'
    },
    {
      cat: 'Packaging', client: 'Fielding Co.', title: 'Fielding Co. — Gift Boxes',
      tag: 'Packaging', spec: 'RIGID BOX / FOIL', color: PALETTE[4],
      desc: 'Limited-edition gift packaging for the brand\'s holiday collection.',
      challenge: 'Needed a premium unboxing moment on a mid-market production budget.',
      solution: 'A single foil-stamped detail on uncoated stock did the work of a far more expensive finish.',
      results: 'Sold out of the limited run in under three weeks.',
      deliverables: 'Box structure, foil artwork, tissue and insert design.'
    },
    {
      cat: 'Digital', client: 'Wildflower Press', title: 'Wildflower Press — Digital Kit',
      tag: 'Digital', spec: 'WEB + SOCIAL', color: PALETTE[5],
      desc: 'Digital templates translating the print identity to web and social.',
      challenge: 'The identity was built for print first; digital touchpoints felt disconnected.',
      solution: 'A digital component library — social templates, email headers, and a simplified web type scale — extending the same system.',
      results: 'Consistent brand presence across print and digital within one launch cycle.',
      deliverables: 'Social template set, email templates, web style guide.'
    }
  ];

  const services = [
    { n: '01', name: 'Brand Identity', desc: 'A complete visual identity — logo, color, typography, and voice — built to hold up across every touchpoint your brand will need.',
      benefits: ['Clear differentiation in a crowded market', 'A system your team can apply consistently', 'A foundation that scales as you grow'],
      deliverables: ['Logo suite & marks', 'Color & type system', 'Brand guidelines document'],
      process: 'Discovery workshop, market and competitor research, concept development, refinement, and a full guidelines handoff.' },
    { n: '02', name: 'Packaging Design', desc: 'Structural and graphic packaging design for products that need to perform on a shelf and in a hand.',
      benefits: ['Stronger shelf presence', 'Packaging that reflects product quality', 'Production-ready files, no guesswork'],
      deliverables: ['Structural dielines', 'Print-ready artwork', 'Material & finish specifications'],
      process: 'Category audit, structural exploration, print design, prototyping, and production file preparation.' },
    { n: '03', name: 'Product Labels', desc: 'Label systems for product lines that need to grow — new flavors, sizes, or SKUs — without a redesign each time.',
      benefits: ['Consistency across a growing line', 'Faster turnaround on new SKUs', 'Regulatory-ready layouts'],
      deliverables: ['Label artwork per SKU', 'Reusable design system', 'Print specifications'],
      process: 'Line audit, system design, template build, and per-SKU production.' },
    { n: '04', name: 'Marketing Design', desc: 'Campaign and marketing materials — from social to signage — that stay on-brand under real-world deadlines.',
      benefits: ['Faster campaign turnaround', 'Consistent brand voice everywhere it appears', 'Assets built for reuse'],
      deliverables: ['Campaign templates', 'Social & ad assets', 'Signage & collateral'],
      process: 'Campaign brief, concept, template system, and asset production.' },
    { n: '05', name: 'Digital Products', desc: 'Design for digital goods — from downloadable resources to UI components — that match your brand system.',
      benefits: ['A professional digital storefront presence', 'Templates you can reuse and resell', 'Consistency with your print identity'],
      deliverables: ['Digital product files', 'UI/UX components', 'Usage guidelines'],
      process: 'Product scoping, wireframing, visual design, and file preparation for delivery.' },
    { n: '06', name: 'Printable Designs', desc: 'Planners, cards, worksheets, and other printable goods designed to be both useful and beautifully made.',
      benefits: ['Ready-to-sell printable products', 'Consistent, branded templates', 'Print and digital-ready files'],
      deliverables: ['Print-ready PDF/PNG files', 'Editable template sources', 'Usage instructions'],
      process: 'Concept, layout design, content integration, and export in required formats.' },
    { n: '07', name: 'Custom Design Solutions', desc: 'For projects that don\'t fit neatly into a category — we scope custom work around what your brand actually needs.',
      benefits: ['A solution tailored to your exact problem', 'Direct collaboration with senior design', 'Flexible scope and timeline'],
      deliverables: ['Defined per project scope', 'Detailed proposal before kickoff', 'Full production files'],
      process: 'Discovery call, custom proposal, and a project plan tailored to scope.' }
  ];

  const processSteps = [
    { n: '01', name: 'Discovery', d: 'A working session to understand your brand, audience, goals, and constraints before any design begins.' },
    { n: '02', name: 'Research', d: 'Category, competitor, and audience research to ground the direction in reality, not assumption.' },
    { n: '03', name: 'Strategy', d: 'A clear creative strategy — positioning, message, and design principles — that every decision will be measured against.' },
    { n: '04', name: 'Concept Development', d: 'Multiple creative directions explored and presented, each grounded in the agreed strategy.' },
    { n: '05', name: 'Design', d: 'The chosen direction developed into a full, production-ready design system.' },
    { n: '06', name: 'Revisions', d: 'Structured rounds of feedback and refinement, keeping the project moving without losing precision.' },
    { n: '07', name: 'Final Delivery', d: 'Complete, organized files and guidelines handed off — ready for production or launch.' }
  ];

  const posts = [
    { tag: 'Branding', title: 'What makes a brand identity actually hold up over time', excerpt: 'The difference between a logo that looks good today and a system that still works in five years.' },
    { tag: 'Packaging', title: 'Designing packaging that survives the production process', excerpt: 'Why the best packaging concept is the one that also works with your printer and budget.' },
    { tag: 'Color Psychology', title: 'Choosing color for shelf standout, not just style', excerpt: 'How color decisions change when your product has to compete in a physical retail aisle.' },
    { tag: 'Print Design', title: 'Paper stock is a design decision, not an afterthought', excerpt: 'How stock, weight, and finish change the way a piece of print is read and felt.' },
    { tag: 'Design Tips', title: 'Five questions to ask before you brief a designer', excerpt: 'Getting clear on these upfront saves both time and budget once a project starts.' },
    { tag: 'Business Design', title: 'When to invest in a rebrand — and when not to', excerpt: 'A rebrand solves specific problems. Here\'s how to tell if that\'s actually what yours needs.' }
  ];

  const faqs = [
    { q: 'How long does a typical project take?', a: 'Brand identity projects generally run 6–8 weeks; packaging and label projects run 3–5 weeks depending on scope. We\'ll give you a specific timeline before kickoff.' },
    { q: 'Do you work with businesses outside your current client types?', a: 'Our focus is entrepreneurs, small and medium-sized businesses, and product-based brands — if that sounds like you, we\'d love to hear about your project.' },
    { q: 'What do you need from me to get started?', a: 'A short brief covering your goals, audience, and any existing brand materials. We\'ll walk through the rest together in the discovery session.' },
    { q: 'Can you work with our existing brand guidelines?', a: 'Yes — many projects extend an existing identity rather than starting from zero. We\'ll assess fit during discovery.' },
    { q: 'Do you handle print production, or just design files?', a: 'We prepare fully production-ready files and specifications, and can recommend and coordinate with printers where helpful.' }
  ];

  /* -----------------------------------------------------------
     2. RENDER — Featured & Portfolio project cards
     Colors are applied via the --swatch-color CSS custom property
     rather than an inline "style" attribute in the markup string.
     ----------------------------------------------------------- */

  function projCardHTML(p) {
    return `
      <div class="proj-card" data-title="${p.title}" data-cat="${p.cat}">
        <div class="proj-swatch" style="--swatch-color:${p.color};">${p.spec}</div>
        <div class="proj-body">
          <div class="tag">${p.tag}</div>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      </div>`;
  }

  const featuredGrid = document.getElementById('featured-grid');
  const portfolioGrid = document.getElementById('portfolio-grid');

  if (featuredGrid) {
    featuredGrid.innerHTML = projects.slice(0, 4).map(projCardHTML).join('');
  }
  if (portfolioGrid) {
    portfolioGrid.innerHTML = projects.map(projCardHTML).join('');
  }

  /* -----------------------------------------------------------
     3. RENDER — Portfolio category filter buttons
     ----------------------------------------------------------- */

  const filterRow = document.getElementById('filter-row');
  const categories = ['All', ...new Set(projects.map(p => p.cat))];

  if (filterRow) {
    filterRow.innerHTML = categories
      .map((c, i) => `<button type="button" class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${c}">${c}</button>`)
      .join('');
  }

  /* -----------------------------------------------------------
     4. RENDER — Services accordion
     ----------------------------------------------------------- */

  const serviceList = document.getElementById('service-list');
  if (serviceList) {
    serviceList.innerHTML = services.map(s => `
      <details class="service-row">
        <summary class="service-summary">
          <div class="s-left"><span class="s-num">${s.n}</span><h3>${s.name}</h3></div>
          <span class="s-plus">+</span>
        </summary>
        <div class="service-detail">
          <div><h5>Overview</h5><p>${s.desc}</p></div>
          <div>
            <h5>Benefits</h5>
            <ul>${s.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
            <h5 class="service-detail-sub">Deliverables</h5>
            <ul>${s.deliverables.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
          <div><h5>Process</h5><p>${s.process}</p></div>
        </div>
      </details>`).join('');
  }

  /* -----------------------------------------------------------
     5. RENDER — Process timeline
     ----------------------------------------------------------- */

  const processList = document.getElementById('process-list');
  if (processList) {
    processList.innerHTML = processSteps.map(s => `
      <div class="process-item">
        <div class="p-num">${s.n}</div>
        <h3>${s.name}</h3>
        <p>${s.d}</p>
      </div>`).join('');
  }

  /* -----------------------------------------------------------
     6. RENDER — Insights / blog cards
     ----------------------------------------------------------- */

  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) {
    blogGrid.innerHTML = posts.map(p => `
      <div class="blog-card">
        <div class="tag">${p.tag}</div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <span class="read">Read the piece →</span>
      </div>`).join('');
  }

  /* -----------------------------------------------------------
     7. RENDER — FAQ accordion
     The open/close "+" rotation is handled purely in CSS via the
     details[open] .s-plus selector, so no JS is needed here beyond
     inserting the markup.
     ----------------------------------------------------------- */

  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.innerHTML = faqs.map(f => `
      <details class="faq-item">
        <summary><span>${f.q}</span><span class="s-plus">+</span></summary>
        <p>${f.a}</p>
      </details>`).join('');
  }

  /* -----------------------------------------------------------
     8. INTERACTION — Mobile navigation toggle
     ----------------------------------------------------------- */

  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mnav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close the mobile menu automatically after tapping a nav link
    mobileNav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -----------------------------------------------------------
     9. INTERACTION — Smooth-scroll CTA buttons
     Any element with [data-scroll-to="#selector"] scrolls smoothly
     to that section. Used by "Start a project", "View the work",
     "Start a conversation", etc.
     ----------------------------------------------------------- */

  document.querySelectorAll('[data-scroll-to]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.getAttribute('data-scroll-to'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* -----------------------------------------------------------
     10. INTERACTION — Portfolio filtering
     ----------------------------------------------------------- */

  if (filterRow && portfolioGrid) {
    filterRow.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterRow.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.cat;
      portfolioGrid.querySelectorAll('.proj-card').forEach(card => {
        const match = cat === 'All' || card.dataset.cat === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  }

  /* -----------------------------------------------------------
     11. INTERACTION — Case study panel (open / close)
     ----------------------------------------------------------- */

  const casePanel = document.getElementById('case-panel');
  const caseClose = document.getElementById('case-close');

  function openCase(title) {
    const p = projects.find(x => x.title === title);
    if (!p || !casePanel) return;

    document.getElementById('case-tag').textContent = p.tag;
    document.getElementById('case-title').textContent = p.title;
    document.getElementById('case-client').textContent = `Client — ${p.client}`;
    document.getElementById('case-challenge').textContent = p.challenge;
    document.getElementById('case-solution').textContent = p.solution;
    document.getElementById('case-results').textContent = p.results;
    document.getElementById('case-deliverables').textContent = p.deliverables;

    casePanel.classList.add('open');
    casePanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function closeCase() {
    if (casePanel) casePanel.classList.remove('open');
  }

  if (portfolioGrid) {
    portfolioGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.proj-card');
      if (card) openCase(card.dataset.title);
    });
  }
  if (featuredGrid) {
    featuredGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.proj-card');
      if (card) openCase(card.dataset.title);
    });
  }
  if (caseClose) {
    caseClose.addEventListener('click', closeCase);
  }

  /* -----------------------------------------------------------
     12. INTERACTION — Contact form (prototype submit handler)
     This is a static-site prototype with no backend wired up, so
     submission simply reveals a confirmation note. Replace this
     handler with a real fetch()/form-service call when ready.
     ----------------------------------------------------------- */

  const contactForm = document.getElementById('contact-form');
  const formNote = document.getElementById('form-note');

  if (contactForm && formNote) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      formNote.classList.add('visible');
    });
  }

  /* -----------------------------------------------------------
     13. ANIMATION — Scroll-in fade-up
     Any element with the .fade-up class animates into place the
     first time it enters the viewport.
     ----------------------------------------------------------- */

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

});
