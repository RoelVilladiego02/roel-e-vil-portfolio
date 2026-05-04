<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { profile } from '../../data/portfolio.js';
import { useDarkMode } from '../../composables/useDarkMode.js';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const { isDark, toggle: toggleDarkMode } = useDarkMode();

const wittyGreetings = [
  "Did you know? Developers are 87% coffee, 12% code, 1% motivation 😄",
  "I'd offer you a cookie, but I'd probably eat it myself 🍪",
  "Let's build something legendary together! 🚀",
  "Fair warning: I might respond with JavaScript puns 😅",
  "Your message is about to make my day! 💌",
  "Plot twist: You're about to email a developer who loves pizza 🍕",
  "They say send a message... so here you are! 📬",
  "This is where the magic happens ✨"
];

const handleSayHello = () => {
  const randomGreeting = wittyGreetings[Math.floor(Math.random() * wittyGreetings.length)];
  alert(randomGreeting + '\n\nNow opening your email... 📨');
  closeMobileMenu();
  window.location.href = `mailto:${profile.email}`;
};

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
        ? 'backdrop-blur-xs bg-white/80 dark:bg-black/80 border-b border-warm-gray dark:border-dark-gray'
        : 'bg-white dark:bg-black'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
      <!-- Logo / Name -->
      <a href="#" class="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200">
        <div class="w-8 h-8 bg-black dark:bg-white flex items-center justify-center">
          <span class="text-white dark:text-black font-display font-bold text-sm">R</span>
        </div>
        <span class="hidden sm:inline font-display font-bold tracking-tight dark:text-white">{{ profile.name.split(' ')[0] }}</span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="font-body text-sm font-medium tracking-wide hover:text-black dark:hover:text-white transition-colors duration-200 dark:text-white/80"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-4 md:gap-6">
        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          class="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 bg-off-white dark:bg-dark-gray hover:bg-warm-gray dark:hover:bg-dark-gray border border-warm-gray dark:border-dark-gray"
        >
          <!-- Sun icon for light mode -->
          <svg
            v-if="!isDark"
            class="w-5 h-5 text-black"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m16.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M20 12a8 8 0 11-16 0 8 8 0 0116 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
          <!-- Moon icon for dark mode -->
          <svg
            v-else
            class="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- CTA Button (Desktop) -->
        <button
          @click="handleSayHello"
          class="hidden md:inline-block px-6 py-2 bg-black dark:bg-dark-gray font-body text-sm font-medium tracking-wide text-white dark:text-white cursor-pointer border-0 relative overflow-hidden group say-hello-btn"
        >
          <span class="relative z-10 block transition-all duration-300 group-hover:scale-110">Say Hello</span>
          <div class="absolute inset-0 bg-dark-gray dark:bg-black transition-all duration-300 -translate-x-full group-hover:translate-x-0"></div>
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity duration-200"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="isMobileMenuOpen"
        >
          <span
            :class="[
              'block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300',
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300',
              isMobileMenuOpen ? 'opacity-0' : ''
            ]"
          ></span>
          <span
            :class="[
              'block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300',
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            ]"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-warm-gray dark:border-dark-gray bg-white dark:bg-black animate-fadeUp"
    >
      <div class="px-6 py-4 flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          @click="closeMobileMenu"
          class="font-body text-sm font-medium tracking-wide hover:text-dark-gray dark:hover:text-white/80 transition-colors duration-200 dark:text-white/80"
        >
          {{ link.label }}
        </a>
        <button
          @click="handleSayHello"
          class="px-4 py-2 bg-black dark:bg-dark-gray font-body text-sm font-medium tracking-wide text-center text-white dark:text-white border-0 w-full cursor-pointer relative overflow-hidden group say-hello-btn"
        >
          <span class="relative z-10 block transition-all duration-300 group-hover:scale-110">Say Hello</span>
          <div class="absolute inset-0 bg-dark-gray dark:bg-black transition-all duration-300 -translate-x-full group-hover:translate-x-0"></div>
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

/* Override color: inherit so the CTA button always shows white text on dark bg */
a.cta-btn {
  color: #f5f5f5 !important;
}

a:focus-visible {
  outline: 2px solid #0a0a0a;
  outline-offset: 2px;
}

/* Say Hello Button Animations */
.say-hello-btn {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(0, 0, 0, 0);
  }
}

.dark .say-hello-btn {
  animation: pulse-dark 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-dark {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
  }
}

.say-hello-btn:hover {
  animation: none;
}
</style>