# 🇪🇹 Ethiogov WEB Design System (EWDS)

A reusable, consistent, and accessible front-end design system for Ethiopian government digital services.  

---

## 📦 Installation

Install via **npm**:

```bash
npm install @abiyub/ethiogov-design-system
```

Or include via CDN (coming soon).

---

## 🚀 Getting Started

Add the CSS and JS bundles to your project:

```html
<link rel="stylesheet" href="node_modules/@abiyub/ethiogov-design-system/dist/css/style.css">
<script src="node_modules/@abiyub/ethiogov-design-system/dist/js/bundle.js"></script>
```

Or import via ES modules:

```js
import '@abiyub/ethiogov-design-system/dist/css/style.css';
import '@abiyub/ethiogov-design-system/dist/js/bundle.js';
```

---

## 🧩 Components

EthiogovDS provides a set of reusable UI components built with accessibility and consistency in mind.

- **Buttons**  
  ```html
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-secondary">Secondary Button</button>
  ```

- **Typography** (base styles for headings, body, captions)

- **Layout Utilities** (spacing, grid, flex)

> 📖 Full component documentation will be added as the library grows.

---

## ⚙️ Development

Clone and set up locally:

```bash
git clone https://github.com/abiyutegegn/ethiogov-design-system.git
cd ethiogov-design-system
npm install
npm run build
```

Available scripts:

- `npm run build` → Build CSS/JS into `dist/`
- `npm run clean` → Clean `dist/`
- `npm run dev`   → Watch and rebuild for local development

---

## 📝 Contributing

We welcome contributions! Please:

1. Open an issue to discuss changes.
2. Follow coding conventions.
3. Run `npm run build` before committing.

---

## 📖 Resources & Inspiration

- [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/)
- [Ethiopian Digital Transformation Strategy](https://mints.gov.et/)  
- Accessibility guidelines: [WCAG 2.1](https://www.w3.org/WAI/standards-guidelines/wcag/)