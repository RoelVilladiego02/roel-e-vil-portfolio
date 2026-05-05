<script setup>
import { computed } from 'vue';
import { getSkillLogo } from '../../data/skillLogos.js';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'dark', 'outline'].includes(value)
  }
});

const logo = computed(() => getSkillLogo(props.label));

// After switching to ?raw imports every logo is either an SVG string or null.
// We keep the URL path as a fallback for any logo that somehow still resolves
// to a path string (e.g. a future logo added without ?raw).
const isUrl = computed(() =>
  logo.value &&
  !logo.value.trimStart().startsWith('<') &&
  (logo.value.startsWith('/') || logo.value.startsWith('http') || logo.value.startsWith('data:'))
);

const isSvgContent = computed(() =>
  logo.value && logo.value.trimStart().startsWith('<')
);
</script>

<template>
  <span
    :class="[
      'skill-tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs font-medium tracking-wide transition-all duration-200',
      variant === 'default' && 'bg-warm-gray text-black hover:bg-black hover:text-white border border-warm-gray',
      variant === 'dark'    && 'bg-black text-white border border-black hover:bg-dark-gray',
      variant === 'outline' && 'bg-transparent text-black border border-black hover:bg-black hover:text-white'
    ]"
  >
    <!-- Inline SVG (raw string) — fill:currentColor inherits the tag's text colour,
         so it flips correctly on hover without any extra filter tricks. -->
    <span
      v-if="isSvgContent"
      class="skill-logo-wrap w-3.5 h-3.5 inline-flex items-center justify-center flex-shrink-0"
      v-html="logo"
    />

    <!-- URL-based SVG fallback (img tag).
         brightness(0) makes the SVG black; invert(1) flips it to white on hover.
         The parent :hover selector drives both via CSS custom property. -->
    <img
      v-else-if="isUrl"
      :src="logo"
      :alt="label"
      class="skill-logo-img w-3.5 h-3.5 flex-shrink-0 object-contain"
    />

    {{ label }}
  </span>
</template>

<style scoped>
span {
  cursor: default;
}

/* ── Inline SVG: size + colour inheritance ── */
.skill-logo-wrap :deep(svg) {
  width: 100%;
  height: 100%;
  fill: currentColor;
  display: block;
}

/* ── URL img: force black, invert to white on hover ── */
.skill-tag:hover .skill-logo-img {
  filter: brightness(0) invert(1);
}
.skill-logo-img {
  filter: brightness(0);           /* makes any coloured SVG render as black */
  transition: filter 0.2s ease;
}

/* ── Dark variant: img starts white, no invert needed on hover ── */
.skill-tag.bg-black .skill-logo-img,
.skill-tag.bg-dark-gray .skill-logo-img {
  filter: brightness(0) invert(1); /* white by default */
}
.skill-tag.bg-black:hover .skill-logo-img,
.skill-tag.bg-dark-gray:hover .skill-logo-img {
  filter: brightness(0) invert(1);
}
</style>