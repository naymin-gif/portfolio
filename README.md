# Nay Min Thar — Portfolio

A responsive, static portfolio built with HTML, CSS, and a small amount of JavaScript. No build step or package installation is required.

## Pages

- `index.html`: introduction, featured CoMatch project, background, experience, contact.
- `comatch.html`: project case study, individual contributions, team credit, screenshot gallery, expandable engineering notes.
- `resume.html`: accessible web résumé with a direct-download link.
- `output/pdf/Nay-Min-Thar-Resume.pdf`: fixed one-page A4 résumé without browser print headers or timestamps.

## Preview

Run `python serve.py`, then open http://127.0.0.1:4173. The preview binds only to your computer and exposes only website files. You can also open `index.html` directly; email copying may need a local server or HTTPS.

## Editing

- Update written content in the HTML pages. Keep résumé and portfolio dates in sync.
- Edit colours, spacing, typography, and responsive layouts in `styles.css`.
- Add screenshots under `assets/`; gallery labels and sources are in `script.js`.
- Add future project articles under the selected-work section when ready.
- Google Fonts supplies Manrope and DM Sans, with local font fallbacks if unavailable.

## Live site

The current portfolio is published at https://naymin-gif.github.io/portfolio/ through GitHub Pages.

## Publishing updates

Upload only these public files to a new portfolio repository or static host:

- `index.html`, `comatch.html`, `resume.html`
- `styles.css`, `resume.css`, `script.js`
- `assets/`
- `output/pdf/Nay-Min-Thar-Resume.pdf`

GitHub Pages publishes the repository's `main` branch from the root folder. Pushing a new commit to `main` updates the live site automatically. Relative asset paths work under the project repository URL.

Do not publish `tmp/`, which contains local reference extraction and QA files. It is excluded by `.gitignore`. No credentials are required by this website. No analytics or contact-form backend are included; the email link opens the visitor's email application.

## Content provenance and review notes

Content is based on the supplied résumé, the 45-page CoMatch project document, and the user's date corrections. Screenshots were extracted from document pages 15, 21, and 28. The live deployment redirected to sign-in during review; authenticated workflows were not independently tested.

- Orbital: May–August 2026. CCAs: August 2025–May 2026.
- Contributions follow the project log's **Nay** column, with explicit credit for the teammate's authentication, dashboard, and UI work.
- Apollo 11 was described as a proposed achievement level, so it is not claimed as an award.
- GPA is omitted because the supplied résumé was described as outdated.
- The printable résumé omits the phone number and adds documented project technologies and completed contributions. The original PDF is unchanged.
- The email is from the résumé. The personal GitHub profile uses the owner account from the CoMatch repository, and the LinkedIn profile was provided by the portfolio owner.
- Reflection and introductory copy are drafted for owner review. No user counts, performance metrics, or unverified awards are claimed.
