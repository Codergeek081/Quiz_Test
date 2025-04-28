import { defineConfig } from 'cypress';
import customViteConfig from './vite.config.js';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: customViteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  hosts: {
    "localhost": "127.0.0.1"
  }
});
