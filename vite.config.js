import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // Prevent Vite from inlining small assets as base64 data URIs.
    // Without this, SVGs under 4 KB get embedded as data: strings in JS
    // bundles, which works but makes debugging harder and can break
    // third-party SVGs that reference internal <defs> by ID.
    assetsInlineLimit: 0,
  },
})