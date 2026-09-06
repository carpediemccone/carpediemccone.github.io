# chenchen · Personal Academic Homepage

Source for my personal academic homepage, built with **plain HTML/CSS/JS** — no frameworks, no build step.

🌐 **Live site:** <https://carpediemccone.github.io/>

## About

- **Author:** Chen Chen (chenchen · 陈宸)
- Research: **AI agents · Multimodal large models**
- Content: Bio · Education · Awards · Publications

## Features

- Bilingual **EN / 中文** with a one-click toggle
- **Light / dark** themes that follow the system (or force via the 🌓 button)
- Single-page, minimal academic layout; fonts are system-only (no external requests)

## Structure

```
├── index.html      page content (every text block has an EN + 中文 pair)
├── css/style.css   layout, themes, responsive & viewport-height rules
├── js/main.js      language / theme toggles (localStorage), "last updated"
└── assets/         static assets
```

## Run locally

Open `index.html` directly in a browser, or serve it:

```
python -m http.server 8000     # → http://localhost:8000
```

## Deploy

Pushing to `main` auto-deploys through GitHub Pages. No extra steps.

---

*Made for and by chenchen — carpe diem.*
