/* eslint-disable no-param-reassign */
import { defineConfig } from 'cypress';
import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
    setupNodeEvents(on, config) {
      config.env = {
        ...process.env,
        ...config.env,
      };

      return config;
    },
  },
});
