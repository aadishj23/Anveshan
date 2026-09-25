# Anveshan

Anveshan is a premier technical society focused on providing personal mentorship to equip students with essential tech skills, knowledge, and hands-on experience. We cultivate a collaborative environment for innovation in areas such as Data Structures and Algorithms, Development, and emerging technologies. Our community, driven by curiosity and mentorship, supports learners at all levels, from beginners to advanced coders, promoting continuous growth and success.

## Official Website

[https://anveshan.dev/](https://anveshan.dev/)

---

## Architecture & Modern Tech Stack

The platform is built on a unified, high-performance Next.js fullstack architecture:

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **UI & Components**: [React 19](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/), [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations & Effects**: [Motion](https://motion.dev/), [GSAP](https://gsap.com/), [Lenis Smooth Scroll](https://lenis.darkroom.engineering/), Canvas Confetti
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database / API**: [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) (Integrated Route Handlers)

---

## Sections & Features

### 1. Home / Hero

High-impact hero section showcasing Anveshan's motto **"Explore • Innovate • Build"** with responsive measurement lines, ASCII console greetings, and direct CTAs.

### 2. About Anveshan

Highlights our mission, history, and community values at Bhagwan Parshuram Institute of Technology (BPIT).

### 3. Events & Timeline

Interactive roadmap of flagship events including **HackBPIT**, **Tech Starter**, **Technovation**, and **Meet Your Alumni** sessions.

### 4. Our Team

Council directory showcasing the Senior and Junior Councils with instant tab switching, member headshots, and social links (LinkedIn, GitHub, LeetCode, Codolio).

### 5. Projects

Curated repository of open-source and student-built software applications with live demo links and GitHub sources.

### 6. Hall of Fame (Achievers)

Celebrating our alumni and students placed at top tech organizations (Google, Amazon, NCR Atleos, PW, FinalRound AI, Rooter, etc.).

### 7. Contact Us

Fullstack contact form saving inquiries directly to MongoDB via the `/api/contact` route handler.

---

## Getting Started Locally

### Prerequisites

- **Node.js**: v20 or higher
- **npm**: v10 or higher
- **MongoDB**: Local MongoDB instance or MongoDB Atlas cluster URI

### Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aadishj23/Anveshan.git
   cd Anveshan
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   ```bash
   cp .env.example .env
   ```

   Add your `DATABASE_URL` in `.env`.

4. **Run the Development Server:**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## Scripts

- `npm run dev`: Start Next.js development server with Turbopack.
- `npm run build`: Build production optimized bundle.
- `npm run start`: Start production server.
- `npm run lint`: Run ESLint checks.
- `npm run format`: Format code using Prettier.

---

## Community & Contributing

- Please review our [Contributing Guide](./CONTRIBUTING.md) before submitting pull requests.
- All members and contributors are expected to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](./LICENSE).
