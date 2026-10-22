<script setup>
import { ref } from 'vue';
import { profile } from '../../data/portfolio.js';
import { useDarkMode } from '../../composables/useDarkMode.js';

const isMobileMenuOpen = ref(false);
const { isDark, toggle: toggleDarkMode } = useDarkMode();

const navLinks = [
  { label: 'Overview', href: '#home', number: '00' },
  { label: 'Work', href: '#work', number: '01' },
  { label: 'About', href: '#about', number: '02' },
  { label: 'Skills', href: '#skills', number: '03' },
  { label: 'Contact', href: '#contact', number: '04' }
];

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/REV_Resume_V2.pdf';
  link.download = 'Roel_Villadiego_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  closeMobileMenu();
};
</script>

<template>
  <aside class="side-nav" aria-label="Main navigation">
    <a class="side-brand" href="#home" aria-label="Go to the top">
      <span class="side-brand-mark">RV</span>
      <span>{{ profile.name }}</span>
    </a>

    <nav class="side-links">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        @click="closeMobileMenu"
      >
        <span class="side-link-number">{{ link.number }}</span>
        <span>{{ link.label }}</span>
      </a>
    </nav>

    <div class="side-spacer"></div>

    <button class="side-resume" @click="handleDownloadResume">
      <span aria-hidden="true">↓</span>
      Download resume
    </button>

    <div class="side-theme">
      <span class="side-kicker">APPEARANCE</span>
      <button
        class="theme-toggle"
        type="button"
        @click="toggleDarkMode"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <span class="theme-icon" aria-hidden="true">{{ isDark ? '☾' : '☼' }}</span>
        <span>{{ isDark ? 'Dark theme' : 'Light theme' }}</span>
        <span class="theme-state">{{ isDark ? 'DARK' : 'LIGHT' }}</span>
      </button>
    </div>

    <div class="side-contact">
      <span class="side-kicker">FOR WORK & COLLABS</span>
      <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      <span class="side-availability">
        <span aria-hidden="true"></span>
        Open to opportunities
      </span>
    </div>
  </aside>

  <header class="mobile-header">
    <a class="side-brand" href="#home">
      <span class="side-brand-mark">RV</span>
      <span>{{ profile.name }}</span>
    </a>
    <div class="mobile-header-actions">
      <button
        class="mobile-theme"
        type="button"
        @click="toggleDarkMode"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        {{ isDark ? '☼' : '☾' }}
      </button>
      <button
        class="mobile-menu-toggle"
        type="button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="isMobileMenuOpen"
      >
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <nav v-if="isMobileMenuOpen" class="mobile-menu" aria-label="Mobile navigation">
    <a
      v-for="link in navLinks"
      :key="link.href"
      :href="link.href"
      @click="closeMobileMenu"
    >
      <span class="side-link-number">{{ link.number }}</span>
      {{ link.label }}
    </a>
    <button class="side-resume" @click="handleDownloadResume">
      <span aria-hidden="true">↓</span>
      Download resume
    </button>
    <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
  </nav>
</template>
