<script setup>
import { ref, onMounted } from 'vue';
import { projects } from '../../data/portfolio.js';
import { useScrollAnimation } from '../../composables/useScrollAnimation.js';
import ProjectCard from '../ui/ProjectCard.vue';

const workSection = ref(null);
const { observe } = useScrollAnimation();

onMounted(() => {
  if (workSection.value) {
    observe(workSection.value);
  }
});
</script>

<template>
  <section
    id="work"
    ref="workSection"
    class="relative bg-off-white dark:bg-black py-section-pad px-6 md:px-8 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 md:mb-20">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-0.5 bg-black dark:bg-white"></div>
          <span class="font-mono text-xs font-bold tracking-widest dark:text-white/80">SELECTED WORK</span>
        </div>
        <h2 class="font-display font-black text-section leading-tight dark:text-white">
          Projects & Case Studies
        </h2>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="animate-fadeUp"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <ProjectCard
            :id="project.id"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
            :image="project.image"
            :link="project.link"
          />
        </div>
      </div>

      <!-- CTA Button -->
      <div class="flex justify-center pt-16 md:pt-20">
        <a
          href="https://github.com/RoelVilladiego02"
          target="_blank"
          rel="noopener noreferrer"
          class="group px-8 md:px-12 py-4 md:py-5 bg-white dark:bg-black text-black dark:text-white font-body font-medium tracking-wide text-sm md:text-base transition-all duration-300 hover:bg-warm-gray dark:hover:bg-dark-gray flex items-center gap-3 border border-black dark:border-white"
        >
          <span>View All Projects</span>
          <svg
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Decorative background element -->
    <div
      class="absolute bottom-0 right-0 text-9xl md:text-[12rem] font-display font-black text-warm-gray opacity-5 pointer-events-none leading-none"
      style="transform: translate(20%, 50%);"
    >
      03
    </div>
  </section>
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
