# Earth Source Limited – Static Website

This repository contains a lightweight static website (HTML/CSS/JS only) for Earth Source Limited.

## Deploy Options

- **GitHub Pages:** Push to `main` and enable Pages (set root to `/`).
- **Netlify / Vercel / Cloudflare Pages:** Connect repo, build command: _none_, publish directory: root.

## Customisation

Replace placeholder images in `assets/img/` with optimised `.webp` or `.jpg` versions:
```
hero.jpg
irish-zinc.jpg
irish-lithium.jpg
scottish-gold.jpg
scottish-copper.jpg
```
Add `assets/hero.mp4` if you want video in the hero (or comment out the `<video>`).

Update `sitemap.xml` and `robots.txt` with your real domain.

## Forms

`contact.html` uses Netlify form handling. If not deploying to Netlify, use Formspree or Basin:
```
<form action="https://formspree.io/f/your-id" method="POST">
```

## License

All original code in this repository is provided under the MIT License (see `LICENSE`). Ensure you have rights to all media assets you deploy.

