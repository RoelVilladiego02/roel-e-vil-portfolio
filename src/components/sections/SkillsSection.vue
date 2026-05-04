<script setup>
import { ref, onMounted } from 'vue';
import { skills } from '../../data/portfolio.js';
import { useScrollAnimation } from '../../composables/useScrollAnimation.js';

const skillsSection = ref(null);
const { observe } = useScrollAnimation();

const skillTabs = ref('categories'); // 'categories' or 'list'

onMounted(() => {
  if (skillsSection.value) {
    observe(skillsSection.value);
  }
});
</script>

<template>
  <section
    id="skills"
    ref="skillsSection"
    class="relative bg-white py-section-pad px-6 md:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16 md:mb-20">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-0.5 bg-black"></div>
          <span class="font-mono text-xs font-bold tracking-widest">EXPERTISE</span>
        </div>
        <h2 class="font-display font-black text-section leading-tight">
          Skills & Technologies
        </h2>
      </div>

      <!-- Tab Toggle -->
      <div class="flex gap-4 mb-12 md:mb-16 border-b border-warm-gray pb-6">
        <button
          @click="skillTabs = 'categories'"
          :class="[
            'font-body font-medium text-sm md:text-base tracking-wide pb-3 border-b-2 transition-all duration-200',
            skillTabs === 'categories'
              ? 'text-black border-black'
              : 'text-dark-gray opacity-50 border-transparent hover:opacity-70'
          ]"
        >
          Categories
        </button>
        <button
          @click="skillTabs = 'list'"
          :class="[
            'font-body font-medium text-sm md:text-base tracking-wide pb-3 border-b-2 transition-all duration-200',
            skillTabs === 'list'
              ? 'text-black border-black'
              : 'text-dark-gray opacity-50 border-transparent hover:opacity-70'
          ]"
        >
          Full List
        </button>
      </div>

      <!-- Categories View -->
      <div v-if="skillTabs === 'categories'" class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div
          v-for="(category, index) in skills.categories"
          :key="index"
          class="space-y-4 pb-8 border-b border-warm-gray animate-fadeUp"
          :style="{ animationDelay: `${index * 80}ms` }"
        >
          <!-- Category Name & Level -->
          <div class="flex items-center justify-between">
            <h3 class="font-display font-bold text-xl md:text-2xl">{{ category.name }}</h3>
            <div class="flex gap-1.5">
              <div
                v-for="i in 5"
                :key="i"
                :class="[
                  'w-2 h-2 rounded-full transition-colors duration-300',
                  i <= category.level ? 'bg-black' : 'bg-warm-gray'
                ]"
              ></div>
            </div>
          </div>

          <!-- Skills List -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, skillIndex) in category.skills"
              :key="skillIndex"
              class="inline-block px-3 py-1.5 bg-off-white border border-warm-gray text-xs md:text-sm font-body font-medium rounded transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Full List View -->
      <div v-else class="space-y-12">
        <!-- Languages -->
        <div class="space-y-4 animate-fadeUp">
          <h3 class="font-display font-bold text-xl md:text-2xl">Languages</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(lang, index) in skills.languages"
              :key="index"
              class="inline-block px-4 py-2 bg-off-white border border-warm-gray text-sm font-body font-medium rounded-full transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
            >
              {{ lang }}
            </span>
          </div>
        </div>

        <!-- Frameworks -->
        <div class="space-y-4 animate-fadeUp" style="animation-delay: 80ms;">
          <h3 class="font-display font-bold text-xl md:text-2xl">Frameworks</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(fw, index) in skills.frameworks"
              :key="index"
              class="inline-block px-4 py-2 bg-off-white border border-warm-gray text-sm font-body font-medium rounded-full transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
            >
              {{ fw }}
            </span>
          </div>
        </div>

        <!-- Design -->
        <div class="space-y-4 animate-fadeUp" style="animation-delay: 160ms;">
          <h3 class="font-display font-bold text-xl md:text-2xl">Design</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(design, index) in skills.design"
              :key="index"
              class="inline-block px-4 py-2 bg-off-white border border-warm-gray text-sm font-body font-medium rounded-full transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
            >
              {{ design }}
            </span>
          </div>
        </div>

        <!-- Tools -->
        <div class="space-y-4 animate-fadeUp" style="animation-delay: 240ms;">
          <h3 class="font-display font-bold text-xl md:text-2xl">Tools & Platform</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(tool, index) in skills.tools"
              :key="index"
              class="inline-block px-4 py-2 bg-off-white border border-warm-gray text-sm font-body font-medium rounded-full transition-all duration-200 hover:bg-black hover:text-white hover:border-black"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Decorative background element -->
    <div
      class="absolute top-1/2 right-0 text-9xl md:text-[12rem] font-display font-black text-warm-gray opacity-5 pointer-events-none leading-none"
      style="transform: translate(20%, -50%);"
    >
      04
    </div>
  </section>
</template>

<style scoped>
button {
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

button:focus-visible {
  outline: 2px solid #0a0a0a;
  outline-offset: 4px;
}
</style>
