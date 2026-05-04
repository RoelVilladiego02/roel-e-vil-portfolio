<script setup>
import NavBar from './components/layout/NavBar.vue'
import Footer from './components/layout/Footer.vue'

import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import WorkSection from './components/sections/WorkSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div class="bg-white text-black">
    <NavBar />

    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
/* Component-specific styles will go here */
</style>
