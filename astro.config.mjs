// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gvc.github.io',

  markdown: {
    shikiConfig: {
      // Imladris descends from Gruvbox Material; code follows the page theme.
      themes: { light: 'gruvbox-light-soft', dark: 'gruvbox-dark-soft' },
    },
  },

  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});