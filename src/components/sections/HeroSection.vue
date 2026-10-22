<script setup>
import { profile, funFacts } from '../../data/portfolio.js';
import GithubContributions from '../ui/GithubContributions.vue';

const socialLinks = [
  { label: 'GitHub', href: profile.socials.github },
  { label: 'LinkedIn', href: profile.socials.linkedin },
  { label: 'Facebook', href: profile.socials.facebook },
  { label: 'Instagram', href: profile.socials.instagram }
];
</script>

<template>
  <section id="home" class="hero-section">
    <div class="hero-content">
      <div class="hero-intro">
        <div class="hero-portrait">
          <img src="../../assets/images/profile.webp" :alt="profile.name" />
          <span class="hero-portrait-index">01 / 05</span>
        </div>

        <div class="hero-copy">
          <p class="eyebrow">FULL-STACK DEVELOPER <span>·</span> LAGUNA, PH</p>
          <h1>{{ profile.name }}</h1>
          <p class="hero-lede">{{ profile.tagline }}</p>
          <p class="hero-bio">
            BSIT graduate with hands-on experience building full-stack web apps, deploying ERP systems,
            and providing technical support.
          </p>

          <div class="hero-links" aria-label="Social links">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ social.label }} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div class="hero-facts" aria-label="Portfolio highlights">
        <div v-for="fact in funFacts" :key="fact.label" class="hero-fact">
          <span class="hero-fact-value">{{ fact.value }}</span>
          <span class="hero-fact-label">{{ fact.label }}</span>
        </div>
      </div>

      <GithubContributions />

      <a class="hero-scroll" href="#work">
        <span class="hero-scroll-dot" aria-hidden="true"></span>
        Scroll to explore
      </a>
    </div>
  </section>
</template>
