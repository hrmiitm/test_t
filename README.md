# Hrithik Roshan — Profile (Static GitHub Pages App)

## Summary

This repository contains a small, static web application built for deployment on GitHub Pages. The app presents a clean profile page for actor Hrithik Roshan with a stylized portrait (SVG) and concise biodata. The project follows best practices for static sites: responsive design, accessibility-conscious markup, simple interactions, and clear documentation.

## Features

- Responsive profile layout with an SVG portrait and biodata.
- Accessible HTML structure and meaningful alt text.
- Lightweight CSS and a tiny JavaScript file for two actions: print and download the bio as a text file.
- Ready to deploy on GitHub Pages (no build step required).

## Files

- `index.html` — The main entry point and profile page.
- `styles.css` — Styles for layout and visual presentation.
- `main.js` — Small script for print and download actions.
- `images/hrithik.svg` — Stylized SVG portrait used as the page image (no copyright issues).
- `README.md` — This file (professional project documentation).
- `LICENSE` — MIT License for this repository.

## Setup

1. Clone the repository:

   git clone https://github.com/your-username/your-repo-name.git

2. Serve locally (optional). Because this is a static site, you can simply open `index.html` in your browser. For a better local test, use a simple static server, for example with Python 3:

   python3 -m http.server 8000

   Then open http://localhost:8000 in your browser.

## Deployment (GitHub Pages)

1. Create a new GitHub repository (or use an existing one).
2. Push all files to the repository's default branch (usually `main` or `master`).
3. In the repository settings, go to "Pages" and select the branch and root folder as the source.
4. Save — GitHub Pages will publish the site. The site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Usage

- Click "Print Profile" to open the browser print dialog.
- Click "Download Bio (TXT)" to download a plain text version of the biodata and short biography.
- Replace `images/hrithik.svg` with an appropriately licensed photographic image if you have rights to one. If you do, ensure you update the `alt` attribute for accessibility and credit the image source.

## Code explanation

- index.html: Uses semantic sections (`header`, `main`, `aside`, `footer`) to structure the profile. The biodata is presented as an unordered list with clear labels.
- styles.css: Lightweight styles, responsive layout with a mobile-first approach. Uses CSS variables for easy tuning.
- main.js: Adds small UI behaviors — printing and downloading a `.txt` file built from on-page data.

## Contact

For questions, suggestions, or issues, contact: student@example.com

## License

This project is licensed under the MIT License — see the `LICENSE` file for details.

