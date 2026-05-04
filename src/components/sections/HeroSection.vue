<script setup>
import { ref, onMounted } from 'vue';
import { profile } from '../../data/portfolio.js';
import { useStaggerAnimation } from '../../composables/useScrollAnimation.js';

const heroContent = ref(null);
const nameWords = profile.name.split(' ');
const taglineWords = profile.tagline.split(' ');

const { stagger } = useStaggerAnimation(80);

onMounted(() => {
  // Stagger animate the name
  setTimeout(() => {
    if (heroContent.value) {
      const nameElements = heroContent.value.querySelectorAll('[data-animate="name"]');
      stagger(nameElements, 0);
    }
  }, 100);

  // Stagger animate the tagline
  setTimeout(() => {
    if (heroContent.value) {
      const taglineElements = heroContent.value.querySelectorAll('[data-animate="tagline"]');
      stagger(taglineElements, 200);
    }
  }, 200);

  // Fade in the scroll indicator
  setTimeout(() => {
    if (heroContent.value) {
      const scrollIndicator = heroContent.value.querySelector('[data-animate="scroll"]');
      if (scrollIndicator) {
        scrollIndicator.classList.add('animate-fadeUp');
      }
    }
  }, 400);
});
</script>

<template>
  <section
    ref="heroContent"
    class="relative h-dvh w-full bg-white dark:bg-black overflow-hidden flex flex-col items-center justify-center pt-20 transition-colors duration-300"
  >
    <!-- Subtle grain texture overlay -->
    <div
      class="absolute inset-0 opacity-[0.02] pointer-events-none"
      :style="{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 result=%22noise%22 seed=%222%22 /></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22 /></svg>')`,
      }"
    ></div>

    <div class="relative z-10 text-center px-6 md:px-8 max-w-5xl mx-auto">
      <!-- Hero Name - Staggered Word Animation -->
      <h1 class="font-display font-black text-hero leading-tight tracking-tighter mb-6 md:mb-8 overflow-hidden">
        <span
          v-for="(word, index) in nameWords"
          :key="`name-${index}`"
          data-animate="name"
          class="inline-block opacity-0 mr-3 md:mr-4"
        >
          {{ word }}
        </span>
      </h1>

      <!-- Hero Tagline - Staggered Word Animation -->
      <p
        class="font-body text-base md:text-lg font-normal tracking-wide max-w-2xl mx-auto mb-12 md:mb-16 leading-relaxed overflow-hidden"
      >
        <span
          v-for="(word, index) in taglineWords"
          :key="`tagline-${index}`"
          data-animate="tagline"
          class="inline-block opacity-0 mr-2"
        >
          {{ word }}
        </span>
      </p>

      <!-- Status Badge -->
      <div
        class="inline-flex items-center gap-2 px-4 py-2 bg-off-white border border-warm-gray rounded-full opacity-0"
        style="animation: fadeUp 0.6s ease-out 500ms forwards;"
      >
        <div class="w-2 h-2 bg-black rounded-full animate-pulse"></div>
        <span class="font-body text-xs font-medium tracking-wide">{{ profile.availability }}</span>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div
      data-animate="scroll"
      class="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 pointer-events-none"
    >
      <span class="font-body text-xs font-medium tracking-widest text-dark-gray">SCROLL</span>
      <div class="w-0.5 h-8 bg-black relative overflow-hidden">
        <div
          class="absolute top-0 left-0 w-full h-1 bg-black animate-bounce"
          style="animation-duration: 1.5s;"
        ></div>
      </div>
    </div>

    <!-- Decorative background element (large number) -->
    <div
      class="absolute bottom-0 right-0 text-9xl md:text-[12rem] font-display font-black text-warm-gray opacity-10 pointer-events-none leading-none"
      style="transform: translate(15%, 25%);"
    >
      01
    </div>

    <!-- Side accent line -->
    <div class="absolute left-0 top-1/3 w-0.5 h-24 bg-black opacity-20"></div>
  </section>
</template>

<style scoped>
h1 {
  word-spacing: -0.1em;
}

/* Ensure text doesn't overflow on very small screens */
@media (max-width: 640px) {
  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
  }
}

/* Smooth transitions for all animated elements */
span[data-animate] {
  transition: opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

span[data-animate].animate-fadeUp {
  opacity: 1 !important;
}
</style>
