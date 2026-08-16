import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/about',
  '/services',
  '/products',
  '/contact',
  '/blog',
  '/case-studies',
  '/privacy',
  '/terms',
  '/404'
];

const PORT = 8092;
const buildDir = path.join(__dirname, 'dist');

(async () => {
  console.log('Starting prerendering...');
  
  // Start static server 
  const app = express();
  app.use(express.static(buildDir));
  
  // Also handle client-side routing fallback so puppeteer doesn't get 404s
  app.use((req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
  });

  const server = app.listen(PORT, async () => {
    console.log(`Express server listening on port ${PORT}`);
    
    try {
      const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
      });
      console.log('Puppeteer launched');

      for (const route of routes) {
        console.log(`Prerendering ${route}...`);
        const page = await browser.newPage();
        
        // Disable unnecessary resources for faster rendering
        await page.setRequestInterception(true);
        page.on('request', (req) => {
          if (['image', 'stylesheet', 'font'].includes(req.resourceType())) {
            req.abort();
          } else {
            req.continue();
          }
        });

        // Go to the page and wait for network to be idle
        await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        
        // Give React Helmet a moment to inject meta tags into the head asynchronously
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Get the fully rendered HTML
        let html = await page.content();
        
        // Save the HTML file
        let routePath = route;
        if (route === '/') routePath = '/index';
        
        const dirPath = path.join(buildDir, routePath === '/index' ? '' : routePath);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
        
        const filePath = path.join(dirPath, routePath === '/index' ? 'index.html' : 'index.html');
        // if it's not root but say '/about', we'll write to dist/about/index.html
        fs.writeFileSync(filePath, html);
        console.log(`Saved ${filePath}`);
        
        await page.close();
      }

      await browser.close();
      console.log('Prerendering completed successfully.');
    } catch (error) {
      console.error('Error during prerendering:', error);
    } finally {
      server.close();
      process.exit(0);
    }
  });
})();
