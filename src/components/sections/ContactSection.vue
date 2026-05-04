<script setup>
import { ref, onMounted } from 'vue';
import { profile } from '../../data/portfolio.js';
import { useScrollAnimation } from '../../composables/useScrollAnimation.js';

const contactSection = ref(null);
const { observe } = useScrollAnimation();

onMounted(() => {
  if (contactSection.value) {
    observe(contactSection.value);
  }
});

const socialLinks = [
  {
    label: 'GitHub',
    href: profile.socials.github,
    icon: 'github'
  },
  {
    label: 'LinkedIn',
    href: profile.socials.linkedin,
    icon: 'linkedin'
  },
  {
    label: 'Dribbble',
    href: profile.socials.dribbble,
    icon: 'dribbble'
  },
  {
    label: 'Twitter',
    href: profile.socials.twitter,
    icon: 'twitter'
  }
];
</script>

<template>
  <section
    id="contact"
    ref="contactSection"
    class="relative bg-black text-white py-section-pad px-6 md:px-8 overflow-hidden"
  >
    <!-- Grain overlay -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      :style="{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><filter id=%22noise%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 result=%22noise%22 seed=%222%22 /></filter><rect width=%22100%22 height=%22100%22 filter=%22url(%23noise)%22 fill=%22white%22 /></svg>')`,
      }"
    ></div>

    <div class="relative z-10 max-w-5xl mx-auto text-center">
      <!-- Main CTA -->
      <h2 class="font-display font-black text-hero leading-tight mb-8 md:mb-12">
        Let's build something amazing.
      </h2>

      <p class="font-body text-lg md:text-xl text-white/80 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed">
        I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </p>

      <!-- Email CTA -->
      <div class="mb-16 md:mb-20">
        <a
          :href="`mailto:${profile.email}`"
          class="inline-block group"
        >
          <span class="font-display font-black text-4xl md:text-6xl hover:opacity-70 transition-opacity duration-300">
            {{ profile.email }}
          </span>
          <div class="h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-3"></div>
        </a>
      </div>

      <!-- Divider -->
      <div class="h-0.5 bg-white/20 mb-12 md:mb-16"></div>

      <!-- Social Links -->
      <div class="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
        <a
          v-for="social in socialLinks"
          :key="social.label"
          :href="social.href"
          :aria-label="social.label"
          target="_blank"
          rel="noopener noreferrer"
          class="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/40 rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:border-white"
        >
          <!-- Icons -->
          <svg
            v-if="social.icon === 'github'"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <svg
            v-else-if="social.icon === 'linkedin'"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.948v5.439h-3.554s.05-8.818 0-9.737h3.554v1.379c.429-.661 1.196-1.6 2.905-1.6 2.122 0 3.714 1.388 3.714 4.368v5.59zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.967-1.715 1.144 0 1.915.76 1.915 1.715 0 .953-.771 1.715-1.967 1.715zm1.613 11.597H3.715V9.57h3.235v10.882zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
          <svg
            v-else-if="social.icon === 'dribbble'"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.12-.073.141-.326.277-.654.394-.985 1.894.281 4.059.271 5.954-1.285.898-.956 1.665-2.372 2.107-4.113.452 1.592.524 3.503.23 5.456zm1.141-5.423c-.468 1.495-1.286 2.888-2.358 3.964-1.573 1.687-3.782 2.874-6.271 2.697-.075-.023-.148-.049-.221-.076.932-2.583.857-5.694-.27-8.545 2.3.789 4.648.71 6.899-.191.653-.27 1.27-.603 1.221-1.849zm-14.095 12.703c-1.235-.936-2.27-2.226-2.977-3.605.526.077 1.076.11 1.634.11 2.973 0 5.659-.916 7.577-2.468.847-.73 1.589-1.623 2.197-2.652-1.682 1.194-3.635 1.805-5.831 1.805-.675 0-1.338-.063-1.978-.186-.765 1.494-1.988 2.743-3.622 3.396zm2.522-10.66c-.37.823-.693 1.617-.958 2.368-.886.131-1.75.066-2.577-.176.534-1.406 1.365-2.605 2.535-3.192zm-7.621 8.318c1.287-1.282 2.25-3.038 2.679-5.055-1.185.213-2.284.635-3.151 1.265-1.047.781-1.897 1.826-2.440 3.038.822.389 1.726.618 2.67.618.265 0 .528-.02.787-.059z" />
          </svg>
          <svg
            v-else-if="social.icon === 'twitter'"
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.25 7-5 7-5s-1.08.25-3 1C20 11 24 8 24 8s-1 2-3 3z" />
          </svg>
        </a>
      </div>

      <!-- Divider -->
      <div class="h-0.5 bg-white/20 mb-12"></div>

      <!-- CTA for collaboration -->
      <p class="font-body text-sm md:text-base text-white/70 tracking-wide">
        Open for <span class="font-bold text-white">freelance projects</span> and <span class="font-bold text-white">full-time opportunities</span>
      </p>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute bottom-10 right-10 text-9xl md:text-[12rem] font-display font-black text-white opacity-5 pointer-events-none leading-none"
    >
      05
    </div>

    <!-- Animated accent line -->
    <div
      class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"
      style="width: 100%; opacity: 0.3;"
    ></div>
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
