# Pradeep Kumar Das — Personal Portfolio 🚀

A modern, minimal, and responsive personal portfolio website built with clean **HTML5**, **Vanilla CSS3**, and **JavaScript (ES6+)**. Featuring a refined neo-brutalist aesthetic, light/dark mode switching, interactive project showcases, and a working contact form powered by **Web3Forms**.

---

## 🌟 Highlights & Features

- **Minimalist Neo-Brutalist Aesthetic**: Sharp lines, balanced tactile drop shadows, curated typography, and high-contrast accessibility.
- **🌗 Light & Dark Theme Switcher**: Instant theme toggling between Neo-Light and Cyber-Dark with persistent storage via `localStorage`.
- **⚡ Live Interactive Components**:
  - **Dynamic Role Rotator**: Cycles through core developer skillsets smoothly.
  - **Category-based Project Filter**: Dynamically filter projects between Full Stack, Web Tools, and E-Commerce.
  - **Project Modal Showcase**: Deep dive into project details, architecture, and technology stacks.
  - **1-Click Clipboard Email Copy**: Copy contact email with custom floating toast notification feedback.
- **📬 Working Contact Form (Web3Forms)**:
  - Directly connected to **Web3Forms API** via asynchronous `fetch()`.
  - Built-in form validation, honeypot spam prevention (`botcheck`), loading state spinner, and instant user feedback alerts.
- **📱 Fully Responsive Across All Screens**:
  - Touch-friendly animated mobile navigation drawer with hamburger toggle.
  - Carefully tested across ultra-small devices (<= 375px), standard mobile (375px-576px), tablets (768px-992px), laptops, and large desktop screens (1200px+).
  - No horizontal scrolling, fluid image scaling, and finger-friendly tap targets.

---

## 🛠️ Tech Stack

- **Markup**: HTML5 (Semantic elements, accessible hierarchy)
- **Styling**: Vanilla CSS3 (Custom design tokens, CSS variables, flexbox, and grid)
- **Scripting**: JavaScript (ES6+, DOM manipulation, asynchronous Fetch API)
- **UI Framework Utilities**: Bootstrap 5.3.3 & Bootstrap Icons
- **Typography**: Space Grotesk, Plus Jakarta Sans, JetBrains Mono (Google Fonts)
- **Form Backend**: [Web3Forms](https://web3forms.com/) API

---

## 📁 Project Structure

```text
personal-portfolio/
├── assets/
│   └── images/
│       ├── hero-avatar.jpg     # Developer profile portrait
│       ├── project-1.jpg       # Project screenshot 1
│       ├── project-2.jpg       # Project screenshot 2
│       └── project-3.jpg       # Project screenshot 3
├── index.html                  # Main portfolio webpage
├── style.css                   # Custom minimal neo-brutalist styling & design tokens
├── script.js                   # Interactive controller (theme, filters, forms, clipboard)
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

No build tools or heavy package installations required! You can run this project locally in seconds:

### 1. Clone or Download the Repository
```bash
git clone https://github.com/Pradeepkumardas/personal-portfolio.git
cd personal-portfolio
```

### 2. Open in Browser
- Simply double click `index.html` to open it in your default web browser, or:
- Use VS Code's **Live Server** extension (recommended for hot reloading):
  - Right click `index.html` → Click **"Open with Live Server"**.

---

## ⚙️ Configuration & Customization

### 1. Web3Forms API Key
The contact form is already configured with Web3Forms. If you want to use your own access key:
1. Get a free API key at [web3forms.com](https://web3forms.com/).
2. In `index.html`, update the hidden input value inside `#contactForm`:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```

### 2. Updating Contact Information & Socials
- **Email Address**: Update `pradeepdas.dev@gmail.com` in `index.html` and in `script.js` (`emailToCopy` constant).
- **Social Profiles**: Update your GitHub and LinkedIn links in the `// PROFILES` section of `index.html`.

---

## 👨‍💻 Author

**Pradeep Kumar Das**
- **Role**: Diploma Student (Computer Engineering) & Full Stack Web Developer
- **Location**: Jamshedpur, Jharkhand, India
- **Email**: [pradeepdas.dev@gmail.com](mailto:pradeepdas.dev@gmail.com)
- **GitHub**: [github.com](https://github.com)
- **LinkedIn**: [linkedin.com](https://linkedin.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to customize and use it for your own personal portfolio!
