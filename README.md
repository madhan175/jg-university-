# 🏛️ JG University Portal - Institutional Excellence Edition

A world-class, high-performance university portal built with **Next.js 15 (App Router)** and **Tailwind CSS 4**. This platform features a premium "Web3-inspired" aesthetic with interactive 3D graphics, real-time search intelligence, and professional institutional modules.

## 🚀 Key Features

### 🌌 Immersive Visual Experience
- **Interactive 3D Hero**: A Three.js powered neural network background that responds to mouse movements for a futuristic entrance.
- **Magnetic Micro-Interactions**: A custom magnetic cursor that snaps to interactive elements, providing a premium software feel.
- **Fluid Animations**: Complex scroll-triggered animations powered by **Framer Motion** and **Lenis Smooth Scroll**.

## 📸 Visual Showcase

![JG University Campus](/assets/Campus/image.png)
*Modern infrastructure designed for tech-driven education.*

![Academic Excellence](/assets/home/image.png)
*Collaborative learning environments fostering innovation.*

## 🎥 Video Walkthrough
[Watch the Portal in Action](https://github.com/madhan175/jg-university-) *(Upload your screen recording here)*

## 🔗 Live Demo
[View Live Website](https://jg-university.vercel.app) *(Deploy on Vercel to activate link)*

### 🔍 Intelligent Functionality
- **Real-time Search Intelligence**: A global search system integrated into the Navbar that filters through all academic programmes instantly.
- **Dynamic Mega Menu**: A high-density navigation system with multi-column layouts for schools and programmes.
- **Advanced Forms**: Career recruitment portal with file upload capabilities and secure contact hubs with Google Maps integration.

### 🏢 Institutional Modules
- **Academic Catalog**: Detailed accordion-based views of Management, Engineering, Law, and Applied Sciences.
- **Global Collaborations**: Highlighting partnerships with international institutions like **Carleton University (Canada)**.
- **Industry Linkage**: Dedicated mentorship carousels featuring industry leaders and corporate partner marquees.
- **Campus Life**: Comprehensive view of facilities, ERP-integrated library, and upcoming visionary campus.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **3D Engine**: Three.js (@react-three/fiber, @react-three/drei)
- **Icons**: Lucide React
- **Carousels**: Swiper.js
- **Scrolling**: Lenis (Studio Freight)

## 📁 Senior Developer Architecture

The project follows a scalable, atomic design structure:
```plaintext
src/
├── app/              # Routing & Metadata
├── components/
│   ├── layout/       # Navbar, Footer, Sidebars
│   ├── sections/     # Large Page Blocks (Hero, Campus, etc.)
│   ├── ui/           # Reusable Components (Modals, Cursor, 3D Canvas)
│   └── providers/    # Global Wrappers (Smooth Scroll)
├── data/             # Centralized constants & programme database
├── public/
│   └── assets/       # Organized institutional media assets
```

## 🏁 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm / yarn / pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/madhan175/jg-university-.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the portal.

## 🏛️ About JG University
JG University is a Tech-Driven institution sponsored by the **ASIA Charitable Trust** (established 1965). The portal reflects the university's philosophy of "Excellence by Choice," bridging the gap between academia and future-ready industry demand.

---
*Created with Excellence by Antigravity AI*
