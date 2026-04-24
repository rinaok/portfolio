# Rina Oksman — Portfolio

Personal portfolio website for **Rina Oksman**, Web & Game Developer.  
Bridging the gap between deep systems and playful interactivity.

---

## Project Structure

```
portofilo/
├── index.html              # Main HTML entry point
├── README.md               # This file
│
├── css/
│   └── styles.css          # Custom styles & animations
│
├── js/
│   ├── data.js             # PROJECTS & EXPERIENCE data arrays
│   ├── api.js              # Gemini AI API integration
│   ├── render.js           # DOM rendering (cards, timeline, modal)
│   └── main.js             # Event listeners & page initialisation
│
└── data/
    └── projects.json       # Projects data in JSON format (reference)
```

> **Script load order matters:** `data.js` → `api.js` → `render.js` → `main.js`

---

## Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Markup     | HTML5                                           |
| Styling    | CSS3 + [Tailwind CSS](https://tailwindcss.com/) (CDN) |
| Icons      | [Lucide](https://lucide.dev/) (CDN)             |
| Fonts      | Google Fonts — Inter                            |
| AI         | Google Gemini API (`gemini-2.5-flash-preview`)  |

No build step required — open `index.html` directly in a browser.

---

## Setup

1. **Clone / download** the project folder.

2. **Add your Gemini API key** in `js/api.js`:
   ```js
   const apiKey = "YOUR_API_KEY_HERE";
   ```
   Get a free key at [Google AI Studio](https://aistudio.google.com/app/apikey).

3. **Add image assets** to the root directory:
   | File | Used for |
   |------|----------|
   | `rina.jpg` | About section profile photo |
   | `Screenshot 2026-02-14 at 0.04.34 (1).jpg` | IDF 360 project card |
   | `Screenshot 2026-04-21 at 17.41.58.jpg` | Falling Sounds project card |
   | `מבצע חיסול.jpg` | Mivtza Hisul project card |

4. **Open** `index.html` in any modern browser, or serve locally:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8080
   ```

---

## Features

- **Projects grid** — four case-study cards with hover overlay and modal detail view
- **AI Design Laboratory** — brainstorm project ideas via the Gemini API
- **AI Optimizer** — per-project optimization suggestions inside each modal
- **Journey timeline** — work, education, and volunteer history
- **About section** — profile photo with grayscale-to-colour hover effect
- **Fully responsive** — mobile-first layout with Tailwind breakpoints
- **No dependencies** — zero npm packages, runs from a single HTML file

---

## Colour Palette

| Name   | Hex       | Usage                      |
|--------|-----------|----------------------------|
| Teal   | `#49b6b6` | Hero, section accents, tags |
| Rose   | `#c66b81` | CTA, danger cues, contact  |
| Yellow | `#f2e29b` | Highlights, selection      |

---

© 2026 Rina Oksman
