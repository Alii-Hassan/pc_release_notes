# PowerCampus Release Notes

This site contains comprehensive documentation for PowerCampus upgrades from version 9.1.1 to 9.3.0.

## Development

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run docs:dev
   ```
4. Visit `http://localhost:5173` to see the site

## Build

To build the site for production:
```bash
npm run docs:build
```

## Preview Production Build

To preview the production build locally:
```bash
npm run docs:preview
```

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. Here's how it works:

1. Any push to the `main` branch will trigger a deployment
2. The GitHub Action workflow (`.github/workflows/deploy.yml`) builds the site and deploys it to GitHub Pages
3. The site will be available at: https://YOUR_GITHUB_USERNAME.github.io/pc_release_notes/

### Manual Deployment

If you need to deploy manually:

1. Make sure GitHub Pages is enabled in your repository settings
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set "Source" to "GitHub Actions"

2. Run the workflow manually:
   - Go to the "Actions" tab in your repository
   - Select the "Deploy" workflow
   - Click "Run workflow"

## Configuration

The site configuration is in `.vitepress/config.mts`. If you change the repository name, make sure to update the `base` property in this file. 