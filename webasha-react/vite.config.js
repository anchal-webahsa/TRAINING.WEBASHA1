import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import prerender from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/', 
        '/about-us', 
        '/contact-us', 
        '/exams', 
        '/career', 
        '/placed-students', 
        '/student-feedback',
        '/gallery',
        '/certificate',
        '/oscp',
        '/osep',
        '/rhcsa',
        '/rhce'
      ],
      renderer: new PuppeteerRenderer({
        maxConcurrentRoutes: 2,
        timeout: 120000
      }),
      server: {
        host: 'localhost',
        port: 5173
      }
    })
  ],
});
