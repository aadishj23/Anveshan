# Contributing to Anveshan

Thank you for your interest in contributing to **Anveshan**! As the premier technical society of Bhagwan Parshuram Institute of Technology (BPIT), we welcome contributions from students, alumni, and open-source enthusiasts.

Please review this guide before submitting issues or pull requests.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/) + [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) + [GSAP](https://gsap.com/) + [Lenis](https://lenis.darkroom.engineering/)
- **Database / API**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/)

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have the following installed:

- **Node.js** (v20 or higher recommended)
- **npm** (comes with Node.js)
- **Git**

### 2. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/<your-username>/Anveshan.git
cd Anveshan
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Setup Environment Variables

Create a local `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Fill in the necessary values:

```env
DATABASE_URL=mongodb://localhost:27017/anveshan
GOOGLE_ANALYTICS_MEASUREMENT_ID=
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌿 Git & Branching Workflow

1. Always branch off the main development branch:
   ```bash
   git checkout -b <type>/<short-description>
   ```

### Branch Naming Conventions:

- `feat/add-event-rsvp` — New feature or page
- `fix/contact-form-validation` — Bug fix
- `docs/update-readme` — Documentation changes
- `refactor/optimize-images` — Code refactoring without behavioral changes
- `style/adjust-mobile-spacing` — Styling / layout tweaks

2. Keep commits concise and meaningful following Conventional Commits:
   ```bash
   feat: add dynamic event registration button
   fix: resolve mongodb connection timeout in contact route
   docs: update council member listings
   ```

---

## 🔍 Code Quality & Standards

Before opening a Pull Request, ensure your code passes all checks:

```bash
# Format code with Prettier
npm run format

# Run linter
npm run lint

# TypeScript verification
npx tsc --noEmit
```

### Best Practices:

- Keep all shared data structures in `src/config/`.
- Ensure new images are placed in `public/assets/` and optimized for web.
- Write clean, strongly typed TypeScript without `any` whenever possible.
- Adhere to the established sketch-style design system and typography tokens.

---

## 📬 Submitting a Pull Request (PR)

1. Push your branch to your fork:
   ```bash
   git push origin <your-branch-name>
   ```
2. Navigate to the GitHub repository and click **Compare & pull request**.
3. Clearly describe the changes made, why they are needed, and link any relevant issues.
4. Add screenshots or recordings for any UI changes.
5. A maintainer will review your PR and provide constructive feedback.

---

## ⚖️ Code of Conduct

All contributors are expected to uphold our [Code of Conduct](./CODE_OF_CONDUCT.md). Please treat all community members with respect and kindness.
