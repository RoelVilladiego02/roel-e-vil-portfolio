<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { profile } from '../../data/portfolio.js';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
      isScrolled
        ? 'backdrop-blur-xs bg-white/80 border-b border-warm-gray'
        : 'bg-white'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
      <!-- Logo / Name -->
      <a href="#" class="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200">
        <div class="w-8 h-8 bg-black flex items-center justify-center">
          <span class="text-white font-display font-bold text-sm">R</span>
        </div>
        <span class="hidden sm:inline font-display font-bold tracking-tight">{{ profile.name.split(' ')[0] }}</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="font-body text-sm font-medium tracking-wide hover:text-black transition-colors duration-200"
          :style="{ color: isScrolled ? '#0a0a0a' : '#0a0a0a' }"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- CTA Button (Desktop) -->
      <a
        href="mailto:hello@roelvilladiego.com"
        class="hidden md:inline-block px-6 py-2 bg-black text-white font-body text-sm font-medium tracking-wide hover:bg-dark-gray transition-colors duration-200"
      >
        Say Hello
      </a>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity duration-200"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMobileMenuOpen"
      >
        <span
          :class="[
            'block w-6 h-0.5 bg-black transition-all duration-300',
            isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 bg-black transition-all duration-300',
            isMobileMenuOpen ? 'opacity-0' : ''
          ]"
        ></span>
        <span
          :class="[
            'block w-6 h-0.5 bg-black transition-all duration-300',
            isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
          ]"
        ></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-warm-gray bg-white animate-fadeUp"
    >
      <div class="px-6 py-4 flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          @click="closeMobileMenu"
          class="font-body text-sm font-medium tracking-wide hover:text-dark-gray transition-colors duration-200"
        >
          {{ link.label }}
        </a>
        <a
          href="mailto:hello@roelvilladiego.com"
          @click="closeMobileMenu"
          class="px-4 py-2 bg-black text-white font-body text-sm font-medium tracking-wide text-center hover:bg-dark-gray transition-colors duration-200"
        >
          Say Hello
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

a:focus-visible {
  outline: 2px solid #0a0a0a;
  outline-offset: 2px;
}
</style>
