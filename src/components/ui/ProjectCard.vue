<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

const isHovered = ref(false);

import { ref } from 'vue';
</script>

<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="group block relative overflow-hidden bg-off-white dark:bg-dark-gray border border-warm-gray dark:border-dark-gray transition-all duration-300 hover:shadow-lg hover:border-black dark:hover:border-white"
  >
    <!-- Card Container -->
    <div class="relative aspect-video md:aspect-[16/9] overflow-hidden bg-warm-gray">
      <!-- Placeholder Image with Grayscale -->
      <div
        :class="[
          'absolute inset-0 flex items-center justify-center bg-gradient-to-br from-dark-gray to-black transition-all duration-500',
          isHovered ? 'grayscale-0 scale-105' : 'grayscale scale-100'
        ]"
      >
        <div class="text-center text-white">
          <p class="text-5xl">🖼️</p>
          <p class="text-xs font-body mt-2 tracking-wide">Project Image</p>
        </div>
      </div>

      <!-- Project Number Overlay -->
      <div
        class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 transition-opacity duration-300"
        :class="{ 'opacity-0': isHovered }"
      >
        <span class="font-display text-9xl font-black text-white">{{ id }}</span>
      </div>

      <!-- Hover Overlay -->
      <div
        class="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300"
        :class="{ 'opacity-100': isHovered }"
      ></div>
    </div>

    <!-- Card Content -->
    <div class="p-6 md:p-8">
      <!-- Title -->
      <h3 class="font-display font-bold text-2xl md:text-3xl mb-3 group-hover:text-dark-gray transition-colors duration-200">
        {{ title }}
      </h3>

      <!-- Description -->
      <p class="font-body text-sm md:text-base text-dark-gray opacity-70 mb-5 line-clamp-2 group-hover:opacity-100 transition-opacity duration-200">
        {{ description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-5">
        <span
          v-for="(tag, index) in tags.slice(0, 3)"
          :key="index"
          class="inline-block px-3 py-1 bg-warm-gray text-xs font-mono font-medium rounded-full transition-colors duration-200 group-hover:bg-black group-hover:text-white"
        >
          {{ tag }}
        </span>
        <span
          v-if="tags.length > 3"
          class="inline-block px-3 py-1 bg-warm-gray text-xs font-mono font-medium rounded-full text-dark-gray opacity-50"
        >
          +{{ tags.length - 3 }}
        </span>
      </div>

      <!-- External Link Icon -->
      <div class="flex items-center gap-2 text-sm font-body font-medium text-dark-gray group-hover:text-black transition-colors duration-200">
        <span>View Project</span>
        <svg
          class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6 6m6-6H9" />
        </svg>
      </div>
    </div>
  </a>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

a:focus-visible {
  outline: 2px solid #0a0a0a;
  outline-offset: 2px;
}
</style>
