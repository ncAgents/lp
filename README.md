# Ardena AI Landing Page

A modern, responsive landing page built with React 18, TypeScript, Vite, and Tailwind CSS.

## Features

- **Dark Theme**: Custom dark background color (`#0B0F1A`)
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, minimalist design with hover effects
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── LandingPage.tsx    # Main landing page component
├── main.tsx          # Application entry point
└── index.css         # Global styles with Tailwind imports
```

## Customization

The landing page uses custom Tailwind colors defined in `tailwind.config.js`:
- `ardena-dark`: `#0B0F1A` (background)
- `ardena-cyan`: `#2BC7F4` (primary button)
- `ardena-light-gray`: `#D3D7E0` (subtitle text)
