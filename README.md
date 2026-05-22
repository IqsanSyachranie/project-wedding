<div align="center">

![Wedding Invitation Hero Mockup](assets/hero-mockup.png)

# 💍 Project-Wedding 
### Premium Javanese-Themed Digital Wedding Invitation & CMS

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Express](https://img.shields.io/badge/Express-5-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)

_Experience the blend of cultural heritage and modern interactive technology._

[**Executive Summary**](#executive-summary) | [**Features**](#-key-features) | [**Architecture**](#-technical-architecture) | [**Getting Started**](#-getting-started)

</div>

---

## 📖 Executive Summary
**Project-wedding** is a premium **Single Page Application (SPA)** platform designed for digital wedding invitations. It uniquely integrates a highly dynamic frontend with a robust **Content Management System (CMS)**.

Unlike static templates, this project celebrates **Javanese cultural heritage** while offering modern interface functionalities. It features seamless transitions, intricate animations powered by `anime.js`, and real-time updates—all manageable through a secure admin dashboard without touching a single line of code after deployment.

> [!TIP]
> **Premium Aesthetics**: Designed for high-end mobile devices, ensuring a smooth 60fps experience for every guest.

---

## ✨ Key Features

The invitation is structured into **10 immersive sections**, all delivered as a single-scroll experience:

- **🎨 Dynamic Theme Engine**: Control color palettes, typography, and animation timings via CMS.
- **⏳ Real-Time Countdown**: Live timer ticking down to the sacred moment.
- **📔 Story Timeline**: A beautiful narrative of the couple's journey with animated transitions.
- **🗺️ Interactive Maps**: Built-in Google Maps and OpenStreetMap integration for venue navigation.
- **📸 High-Def Gallery**: Optimized image management with automatic lazy loading.
- **✍️ Digital Guestbook & RSVP**: Real-time attendance tracking with pax count and greetings.
- **💰 Cashless Tab**: One-click "Copy Account" functionality for digital gifting.
- **🔒 Secure CMS**: Full CRUD capabilities for all sections, protected by session-based authentication.

---

## 🏗️ Technical Architecture

This project follows a modern **Split-Stack Architecture**:

### ⚛️ Frontend (Angular 21)
- **Standalone Components**: Clean, modular structure for maintainability.
- **Signals API**: High-performance state management.
- **SCSS Design System**: Tokenized styling for consistent premium look & feel.
- **`anime.js`**: Orchestrating complex cultural-themed animations.

### 🌐 Backend (Express 5 & Prisma 7)
- **RESTful API**: Versioned (`v1`) endpoints for both guest and admin operations.
- **Prisma ORM**: Type-safe database access with MySQL.
- **Session Auth**: Secure server-side sessions with CSRF protection.
- **Zod Validation**: Strict schema validation at the API boundary.

---

## 📁 Project Structure

```text
project-wedding/
├── frontend/          # Angular 21 SPA (Public UI & CMS)
├── backend/           # Express 5 API & Prisma 7 Logic
├── assets/            # Static media and hero images
├── docs/              # Detailed technical documentation
└── _bmad-output/      # Agentic planning and PRD artifacts
```

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) (Recommended) or `npm/yarn`
- [MySQL](https://www.mysql.com/) instance

### 1. Installation
Clone the repository and install dependencies for both layers:
```bash
bun run install
```

### 2. Environment Setup
Create a `.env` file in the `backend/` directory following the `.env.example`:
```env
DATABASE_URL="mysql://user:pass@localhost:3306/wedding_db"
SESSION_SECRET="your_secure_secret"
```

### 3. Database Migration
Initialize your database schema:
```bash
bun db:gen
bun db:push
```

### 4. Running Locally
Run both the frontend and backend concurrently:
```bash
bun run dev
```
Front-end will be available at `http://localhost:4200` and API at `http://localhost:3000`.

---

## 🤖 Agentic Integration
This project is developed using **BMad (Agentic Framework)**. All planning artifacts, including the PRD, Architecture Decision Records (ADR), and UX Specifications, are maintained in the [`_bmad-output`](./_bmad-output) directory for full traceability and AI-assisted development context.

---

<div align="center">

**Developed by [Iqsan Syachranie](https://github.com/IqsanSyachranie)**

Made with ❤️ and Javanese Pride.

</div>
