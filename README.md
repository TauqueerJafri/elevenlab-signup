# ElevenLabs Sign-Up Frontend Clone

A frontend UI clone of the ElevenLabs sign-up page built with React, TypeScript, and Vite. This project replicates the design and layout of the official ElevenLabs signup interface using modern web technologies.

## Features

- **UI Clone**: Faithful recreation of the ElevenLabs signup page design
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Form Components**: Email and password input fields with Google signup button
- **Fast Development**: Built with Vite for lightning-fast HMR (Hot Module Replacement)
- **Type-Safe**: Full TypeScript support for robust development
- **Code Quality**: ESLint configuration for consistent code standards

## Tech Stack

- **React 19**: Modern React with latest features
- **TypeScript**: Type-safe JavaScript development
- **Vite 7**: Ultra-fast build tool and development server
- **Tailwind CSS 4**: Utility-first CSS framework
- **ESLint**: Code quality and consistency

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TauqueerJafri/elevenlab-signup.git
cd elevenlabs-signin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173` with hot module replacement enabled.

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
elevenlabs-signin/
├── src/
│   ├── App.tsx          # Main sign-up form component
│   ├── App.css          # Component styles
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Static files
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Development

This project uses:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) with Babel for Fast Refresh
- Tailwind CSS via `@tailwindcss/vite` plugin for optimized CSS

## ESLint Configuration

Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
