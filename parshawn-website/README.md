# parshawn.com

Personal site for Parshawn Beheshtian — Leadership Coaching.

## Stack
- Plain HTML/CSS/JS — no framework, no build step
- Hosted on Cloudflare Pages
- Form handling via Formspree

## File Structure
```
parshawn-website/
├── index.html          ← Main landing page
├── emblem-favicon.svg  ← Site icon
├── css/
│   ├── style.css       ← Main styles and design system
│   └── contact.css     ← Contact page styles
├── js/
│   ├── main.js         ← Scroll animations, nav
│   └── contact.js      ← Form submission
└── pages/
    └── contact.html    ← Contact page
```

## Local Development
No build step needed. Open `index.html` directly in your browser, or use VS Code's Live Server extension:
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

## Deployment (Cloudflare Pages)
1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub account → select `parshawn-website`
4. Build settings: leave blank (no build command, no output directory)
5. Deploy — Cloudflare will publish on every push to `main`
6. In Cloudflare DNS, point `parshawn.com` to your Pages project

## Contact Form Setup
The contact form uses [Formspree](https://formspree.io) (free tier):
1. Create a free account at formspree.io
2. Create a new form — copy your form ID
3. In `pages/contact.html`, replace `YOUR_FORM_ID` in the form action URL

## Editing Content
All copy lives directly in the HTML files — no CMS needed.
- Hero, sections, testimonials → `index.html`
- Contact page → `pages/contact.html`
- Colors and fonts → `css/style.css` (`:root` variables at the top)
