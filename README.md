# John Praise - Digital Portfolio

> A high-performance, immersive digital experience built with Next.js 14, TypeScript, and Tailwind CSS.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)

## 📖 Overview

This repository hosts the source code for my personal portfolio website. Designed with a distinct **"System Monitor"** aesthetic, it serves as both a showcase of my professional work and a demonstration of modern frontend engineering capabilities.

The project prioritizes **performance**, **type safety**, and **maintainability**. It features a decoupled content architecture, where all textual data is externalized into JSON, allowing for rapid content updates without touching the component logic.

## 🛠️ Engineering Stack

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety.
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first, zero-runtime styling.
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) for declarative, hardware-accelerated transitions.
-   **Icons**: [Lucide React](https://lucide.dev/) for consistent, lightweight iconography.
-   **Deployment**: [Vercel](https://vercel.com/) for edge-optimized delivery.

## 🏗️ Architecture & Design

### Decoupled Data Layer
To ensure the codebase remains clean and maintainable, I implemented a separation of concerns between the UI components and the content they display. All static content is housed in the `src/data/` directory as structured JSON files.

This architecture allows for:
1.  **Centralized Content Management**: All text, links, and configuration are in one place.
2.  **Type-Safe Data Consumption**: TypeScript interfaces can be easily generated from the JSON structure (future enhancement).
3.  **Scalability**: Adding new projects or skills is as simple as appending an object to an array.

### Component Structure
The application follows a modular component architecture within the `src/app` directory, leveraging React Server Components (RSC) by default for improved initial page load performance. Client-side interactivity is opted-in only where necessary (e.g., animations, state) using the `"use client"` directive.

## 🚀 Getting Started

### Prerequisites
-   Node.js 18.17 or later
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/johnpraise/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Navigate to `http://localhost:3000` in your browser.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── about/            # /about route
│   ├── contact/          # /contact route
│   ├── projects/         # /projects route
│   ├── skills/           # /skills route
│   ├── layout.tsx        # Root layout (Metadata, Fonts)
│   └── page.tsx          # Home page (System Monitor Dashboard)
├── components/           # Shared React Components
├── data/                 # Externalized Content (JSON)
│   ├── about.json        # Bio, Experience, Education
│   ├── common.json       # Shared Data (Name, Socials)
│   ├── contact.json      # Contact Info
│   ├── home.json         # Dashboard Stats & Config
│   ├── projects.json     # Project Portfolio
│   └── skills.json       # Technical Skills Matrix
└── styles/               # Global Styles (Tailwind)
```

## 📝 Content Management

This portfolio is designed to be easily customizable. You can update the content by modifying the JSON files in `src/data/`.

-   **`common.json`**: Update global variables like your name, role, and social links.
-   **`projects.json`**: Add new projects to the portfolio grid.
-   **`skills.json`**: Adjust skill levels and categories.
-   **`experience.json`** (inside `about.json`): Update your work history.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome.

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'feat: add amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <sub>Built with 💻 and ☕ by <a href="https://github.com/otuja">John Praise</a></sub>
</div>
