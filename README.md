# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Adding certificates

Place each certificate's WebP preview in `src/assets/images/certificates/`, then
import it in `src/data/portfolio.js` and add an entry to the exported
`certificates` array. Each entry needs a unique `id`, a display `title`, an
`issuer`, the imported image as `preview`, and the certificate URL as `link`.
Set `link: null` if no verification link is available. Previews use
`object-fit: contain` so portrait and landscape certificates retain their full
orientation without cropping.
