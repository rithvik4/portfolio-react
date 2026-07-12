# Portfolio

A personal portfolio website built with React and styled components.

This repository contains a complete, multi-section portfolio app with pages for:

- Home / Greeting
- Skills
- Education
- Experience
- Projects
- Open source stats
- Contact

## Tech Stack

- React (Create React App)
- Styled Components + CSS/SCSS
- Chart.js (`react-chartjs-2`) for visualizations
- GitHub Pages for deployment

## Project Structure

Main areas you will usually edit:

- `src/portfolio.js`: primary portfolio content/configuration
- `src/theme.js`: colors and theme settings
- `src/shared/`: shared data JSON files
- `src/containers/`: section-level UI blocks
- `src/components/`: reusable UI components

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm start
```

The app runs in development mode at `http://localhost:3000`.

### 3. Run tests

```bash
npm test
```

### 4. Build production bundle

```bash
npm run build
```

## Available Scripts

From `package.json`:

- `npm start`: run local development server
- `npm test`: run test runner
- `npm run build`: create production build
- `npm run predeploy`: build before deployment
- `npm run deploy`: publish `build/` to `gh-pages` branch

## Deployment (GitHub Pages)

This project is already configured with:

- `homepage` in `package.json`
- `gh-pages` deployment script

Deploy with:

```bash
npm run deploy
```

## Customization Guide

To personalize this portfolio quickly:

1. Update your personal details, social links, skills, and projects in `src/portfolio.js`.
2. Adjust visual theme values in `src/theme.js`.
3. Replace images/assets in `src/assests/` as needed.
4. Verify contact-related data in `src/contact_data.json` and `src/shared/contact_data.json`.

## Notes

- Build and start scripts include `NODE_OPTIONS=--openssl-legacy-provider` for compatibility with older CRA/Webpack tooling on newer Node.js versions.
- If deployment assets do not refresh, clear browser cache or check the latest `gh-pages` commit.

## License

See `LICENSE` for details.
