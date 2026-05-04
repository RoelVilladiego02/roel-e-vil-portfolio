<script setup>
import { ref, onMounted } from 'vue';
import { profile, funFacts } from '../../data/portfolio.js';
import { useScrollAnimation } from '../../composables/useScrollAnimation.js';

const aboutSection = ref(null);
const { observe } = useScrollAnimation();

onMounted(() => {
  if (aboutSection.value) {
    observe(aboutSection.value);
  }
});
</script>

<template>
  <section
    id="about"
    ref="aboutSection"
    class="relative bg-white dark:bg-black py-section-pad px-6 md:px-8 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Section Label -->
      <div class="flex items-center gap-4 mb-12 md:mb-16">
        <div class="w-12 h-0.5 bg-black dark:bg-white"></div>
        <span class="font-mono text-xs font-bold tracking-widest dark:text-white/80">ABOUT ME</span>
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Left: Masked Image -->
        <div class="relative h-96 md:h-full min-h-96 md:min-h-[500px] group overflow-hidden">
          <!-- Profile image with clip-path mask -->
          <img
            src="../../assets/images/profile.webp"
            alt="Profile"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style="clip-path: polygon(0 0, 100% 0, 85% 100%, 0 85%);"
          />

          <!-- Decorative corner accent -->
          <div class="absolute -bottom-2 -right-2 w-24 h-24 border-2 border-black dark:border-white opacity-20 pointer-events-none"></div>
        </div>

        <!-- Right: Bio & Facts -->
        <div class="space-y-8 md:space-y-10">
          <!-- Bio Statement -->
          <div class="space-y-4">
            <p class="font-body text-lg md:text-xl leading-relaxed text-dark-gray dark:text-white font-medium transition-colors duration-300">
              {{ profile.bio }}
            </p>
            <p class="font-body text-base text-dark-gray dark:text-white/80 opacity-70 dark:opacity-90 leading-relaxed transition-colors duration-300">
              I'm passionate about creating digital products that solve real problems and delight users. 
              When I'm not coding or designing, you'll find me exploring new design trends, contributing to open source, 
              or sharing knowledge with the development community.
            </p>
          </div>

          <!-- Horizontal Divider -->
          <div class="h-0.5 bg-warm-gray dark:bg-dark-gray transition-colors duration-300"></div>

          <!-- Fun Facts Grid -->
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="(fact, index) in funFacts"
              :key="index"
              class="space-y-1 pb-4 border-b border-warm-gray dark:border-dark-gray hover:border-black dark:hover:border-white transition-colors duration-300"
            >
              <p class="font-display text-3xl md:text-4xl font-bold dark:text-white transition-colors duration-300">{{ fact.value }}</p>
              <p class="font-body text-xs font-medium tracking-widest text-dark-gray dark:text-white/80 opacity-60 dark:opacity-80 transition-colors duration-300">
                {{ fact.label }}
              </p>
            </div>
          </div>

          <!-- Horizontal Divider -->
          <div class="h-0.5 bg-warm-gray dark:bg-dark-gray transition-colors duration-300"></div>

          <!-- Current Status -->
          <div class="flex items-center gap-3 pt-2">
            <div class="w-3 h-3 bg-black dark:bg-white rounded-full animate-pulse"></div>
            <span class="font-body text-sm font-medium text-dark-gray dark:text-white/80 transition-colors duration-300">
              Currently based in <span class="font-bold">{{ profile.location }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative background element -->
    <div
      class="absolute top-20 right-0 text-9xl md:text-[12rem] font-display font-black text-warm-gray dark:text-dark-gray opacity-5 dark:opacity-10 pointer-events-none leading-none transition-colors duration-300"
      style="transform: translate(20%, -50%);"
    >
      02
    </div>
  </section>
</template>

<style scoped>
/* Smooth hover effect for facts */
div:hover {
  transition: all 0.3s ease;
}
</style>
