<script setup>
import { computed } from 'vue';
import { profile } from '../../data/portfolio.js';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="bg-black dark:bg-dark-gray text-white border-t border-dark-gray dark:border-black transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
      <!-- Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
        <!-- Left: Name & Tagline -->
        <div class="space-y-2">
          <h3 class="font-display font-bold text-2xl">{{ profile.name.split(' ')[0] }}</h3>
          <p class="font-body text-sm text-white/60">{{ profile.tagline }}</p>
        </div>

        <!-- Center: Quick Links -->
        <div class="space-y-4">
          <p class="font-body text-xs font-bold tracking-widest text-white/40 uppercase">Quick Links</p>
          <nav class="space-y-2">
            <a href="#work" class="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 block">Work</a>
            <a href="#about" class="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 block">About</a>
            <a href="#skills" class="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 block">Skills</a>
            <a href="#contact" class="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 block">Contact</a>
          </nav>
        </div>

        <!-- Right: Social & Status -->
        <div class="space-y-4">
          <p class="font-body text-xs font-bold tracking-widest text-white/40 uppercase">Connect</p>
          <div class="space-y-2">
            <a
              :href="`mailto:${profile.email}`"
              class="font-body text-sm text-white/70 hover:text-white transition-colors duration-200 block"
            >
              {{ profile.email }}
            </a>
            <div class="flex items-center gap-2 pt-2">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span class="font-body text-xs text-white/60">Available for projects</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-0.5 bg-dark-gray dark:bg-white/10 mb-8"></div>

      <!-- Footer Bottom -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="font-body text-xs text-white/50 text-center md:text-left">
          © {{ currentYear }} {{ profile.name }}. All rights reserved.
        </p>
        <p class="font-body text-xs text-white/50">
          Made with <span class="text-red-500">♥</span> using Vue 3 & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}
</style>
