/*
  Creates per-route HTML files after CRA build by copying build/index.html
  to each route's directory as index.html. Also creates a root 404.html for
  static hosts that support 404 fallback.
*/

const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const indexFile = path.join(buildDir, 'index.html');

// Define the routes in your app that should have an HTML file generated
const routes = [
  '/',
  '/about-us',
  '/services',
  '/service-pillar',
  '/contact-us',
  '/privacy-policy',
  '/terms-of-service',
  '/disclaimer',
  '/credits',
  '/maintenance',
  '/not-found'
];

function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function main() {
  if (!fs.existsSync(buildDir)) {
    console.error('Build directory not found at', buildDir);
    process.exit(1);
  }
  if (!fs.existsSync(indexFile)) {
    console.error('index.html not found in build directory');
    process.exit(1);
  }

  const html = fs.readFileSync(indexFile, 'utf8');

  routes.forEach((route) => {
    // Skip root because it's already build/index.html
    if (route === '/') return;

    const dir = path.join(buildDir, route.replace(/^\//, ''));
    ensureDirSync(dir);
    const out = path.join(dir, 'index.html');
    fs.writeFileSync(out, html);
    console.log('Wrote', out);
  });

  // Create a top-level 404.html for static hosts
  const notFoundPath = path.join(buildDir, '404.html');
  fs.writeFileSync(notFoundPath, html);
  console.log('Wrote', notFoundPath);
}

main();
