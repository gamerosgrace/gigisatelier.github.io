# Gigi's Atelier — Studio Website

A modern, responsive marketing website for **Gigi's Atelier**, a creative
studio specializing in brand identity, packaging design, product labels,
and print for entrepreneurs and product-based brands.

Built as a static site — no framework, no build step, no backend — so it's
ready to open locally or deploy to any static host in minutes.

---

## Features

- **Fully responsive** layout — from mobile through desktop
- **On-brand visual system** — colors, type, and decorative details pulled
  directly from the Gigi's Atelier logo and packaging identity
- **Sticky navigation** with a mobile dropdown menu
- **Filterable portfolio** grid with click-to-expand case studies
  (challenge, solution, results, deliverables)
- **Services accordion** — expandable detail per discipline
- **Process timeline**, **Insights/blog** grid, and **FAQ accordion**
- **Contact form** (front-end only — see [Connecting the contact form](#connecting-the-contact-form))
- **Scroll-in animations** via `IntersectionObserver`
- Semantic HTML, no inline styles or inline scripts — everything lives in
  `styles.css` and `script.js`

---

## Technologies Used

- **HTML5** — semantic markup
- **CSS3** — custom properties (CSS variables), Grid, Flexbox, no framework
- **Vanilla JavaScript (ES6+)** — no dependencies, no build tools
- **Google Fonts** — [Fredoka](https://fonts.google.com/specimen/Fredoka),
  [Poppins](https://fonts.google.com/specimen/Poppins), and
  [Caveat](https://fonts.google.com/specimen/Caveat)

No package manager, bundler, or framework is required to run or deploy
this project.

---

## Folder Structure

```text
Gigis-Atelier/
│
├── index.html            # Page structure/markup only
├── styles.css             # All styling, organized by section
├── script.js               # All interactivity, organized by section
├── README.md
│
└── assets/
    ├── images/            # Logo, portfolio imagery, photography
    │   └── gigis-logo.png
    ├── icons/             # Favicon and any UI/social icons
    │   └── favicon.png
    └── fonts/             # (optional) local font files if self-hosting
```

`assets/images` and `assets/icons` currently contain a placeholder
favicon and the primary logo — see the `README.txt` inside each asset
folder for guidance on what to add next (portfolio photography, social
icons, self-hosted fonts, etc.).

---

## Installation

No installation is required — there are no dependencies to install.

1. Download or clone this project folder.
2. Keep the folder structure intact (`index.html`, `styles.css`,
   `script.js`, and the `assets/` folder must stay in the same directory).

```bash
git clone https://github.com/YOUR-USERNAME/Gigis-Atelier.git
cd Gigis-Atelier
```

---

## Running the Website Locally

Because the site uses only static files, you can open it directly or
serve it with any lightweight local server (recommended, since some
browsers restrict certain features when opening `index.html` directly
via `file://`).

**Option A — Open directly**
Double-click `index.html`, or open it via your browser's File → Open menu.

**Option B — Local server (recommended)**

Using Python:
```bash
# Python 3
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

Using Node.js:
```bash
npx serve .
```

Using VS Code:
Install the **Live Server** extension, right-click `index.html`, and
choose **Open with Live Server**.

---

## Deployment

### Deploying to GitHub Pages

1. Push this project to a GitHub repository (the repository root should
   contain `index.html`).
2. In your repository, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **Deploy from a branch**.
4. Choose the branch (e.g. `main`) and the root folder (`/`), then save.
5. GitHub will publish the site at:
   `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`
6. Changes pushed to that branch will redeploy automatically.

### Deploying to Netlify

**Option A — Drag and drop**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the entire `Gigis-Atelier` project folder into the browser window.
3. Netlify will deploy it instantly and give you a live URL.

**Option B — Git-based deploy (recommended for ongoing updates)**
1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. In Netlify, click **Add new site → Import an existing project**.
3. Connect your repository.
4. Build settings: leave the **build command** empty and set the
   **publish directory** to the project root (`.` or `/`), since this is
   a static site with no build step.
5. Click **Deploy site**.

Either host works well for this project since there is no server-side
code or database involved.

---

## Connecting the Contact Form

The contact form in `index.html` is currently front-end only: submitting
it shows a confirmation message but does not send an email. To make it
functional without adding a backend, you have a few options:

- **[Netlify Forms](https://docs.netlify.com/forms/setup/)** — add a
  `netlify` attribute to the `<form>` tag if hosting on Netlify.
- **[Formspree](https://formspree.io/)** or a similar form-as-a-service
  provider — point the form's `action` at their endpoint.
- A custom backend endpoint, if/when one exists — update the `fetch()`
  call inside the submit handler in `script.js` (see section
  **"12. INTERACTION — Contact form"**).

---

## Browser Support

Built with modern, well-supported CSS and JavaScript (CSS custom
properties, `<details>`/`<summary>`, `IntersectionObserver`, `fetch`).
Works in all current versions of Chrome, Firefox, Safari, and Edge.

---

## License

This project and its content are © 2026 Gigi's Atelier. All rights
reserved. The code structure may be reused and adapted for your own
projects; the Gigi's Atelier brand name, logo, and copy are proprietary
to the studio.

---

## Author

**Gigi's Atelier**
Creative studio — brand identity, packaging, labels, and print.
📧 gigisatelierr@gmail.com
