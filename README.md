# Nguyen Viet Hoang Luong — Portfolio

> **Live site:** https://robotwar05.github.io  
> **Stack:** HTML5 / CSS3 / JS / Jekyll (GitHub Pages)  
> **Base theme:** Strata by HTML5 UP (heavily customized)

## Project Structure

```
├── _includes/        ← Reusable UI components
│   ├── head.html         Meta tags, CSS links
│   ├── header.html       Left sidebar: avatar, name, bio
│   ├── footer.html       Social icons: GitHub, LinkedIn, Email
│   ├── home_overlay.html Apple Hero landing screen + all its CSS
│   └── scripts.html      jQuery, JS transition logic
├── _layouts/
│   └── default.html  ← Master page wrapper (assembles all includes)
├── index.html        ← Home page + Projects grid (Jekyll Frontmatter only)
├── Resume.html       ← Resume with embedded PDF viewer
├── Contact.html      ← Contact page with inline CSS via extra_head
├── assets/           ← main.css, JS libs, PDF, font assets
├── images/           ← bg.jpg, me.JPEG, project images
└── my_web/           ← Obsidian Knowledge Base (open with Obsidian app)
```

## Documentation

All technical documentation lives in `my_web/`. Open it with **Obsidian** for the best experience (wikilinks, callouts, diagrams).

Start at: `my_web/Home.md`

Topics covered:
- `01_Architecture/` — How Jekyll component assembly works
- `02_Design_System/` — Hard CSS rules (avatar, layout, transitions, PDF)
- `03_Developer_Guide/` — How to add projects, pages, change avatar
- `04_Changelog/` — History of major visual updates and bug fixes

## Quick Reference

| Task | Where to edit |
|---|---|
| Change name / avatar / bio | `_includes/header.html` |
| Change social links | `_includes/footer.html` |
| Add a project | `index.html` → section `<!-- Two -->` |
| Add a new page | Create `NewPage.html` with Jekyll Frontmatter |
| Global CSS changes | `assets/css/main.css` |
| Home landing content | `_includes/home_overlay.html` |