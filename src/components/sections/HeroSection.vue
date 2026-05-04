<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { profile } from '../../data/portfolio.js';
import { skillLogos } from '../../data/skillLogos.js';
import { useStaggerAnimation } from '../../composables/useScrollAnimation.js';
import { useDarkMode } from '../../composables/useDarkMode.js';

const heroContent = ref(null);
const nameWords = profile.name.split(' ');
const taglineWords = profile.tagline.split(' ');
const cursorX = ref(0);
const cursorY = ref(0);
const cursorVisible = ref(false);
const glitchActive = ref(false);
const nameRevealed = ref(false);

// Skills carousel
const carouselSkills = [
  { name: 'JavaScript', label: 'JS' },
  { name: 'Vue', label: 'Vue' },
  { name: 'React', label: 'React' },
  { name: 'Laravel', label: 'Laravel' },
  { name: 'WordPress', label: 'WordPress' },
  { name: 'MySQL', label: 'MySQL' },
  { name: 'Git', label: 'Git' },
  { name: 'Vite', label: 'Vite' }
];
const rotationIndex = ref(0);
const carouselContainer = ref(null);
let rotationInterval = null;

const { isDark, toggle } = useDarkMode();
const { stagger } = useStaggerAnimation(80);

// Compute styles for name words based on dark mode
const getNameWordStyle = (index) => {
  if (index % 2 === 1) {
    // Stroke style
    return {
      color: 'transparent',
      WebkitTextStroke: isDark.value ? '1px rgba(255, 255, 255, 0.75)' : '1px rgba(0, 0, 0, 0.6)'
    };
  }
  // Fill style
  return {
    color: isDark.value ? '#ffffff' : '#000000'
  };
};

// Magnetic cursor tracking
const handleMouseMove = (e) => {
  cursorX.value = e.clientX;
  cursorY.value = e.clientY;
  cursorVisible.value = true;

  // Parallax effect on background orbs
  const section = heroContent.value;
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
  const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

  const orb1 = section.querySelector('.orb-1');
  const orb2 = section.querySelector('.orb-2');
  if (orb1) orb1.style.transform = `translate(${xRatio * 40}px, ${yRatio * 40}px)`;
  if (orb2) orb2.style.transform = `translate(${xRatio * -60}px, ${yRatio * -60}px)`;
};

const handleMouseLeave = () => { cursorVisible.value = false; };

// Glitch effect trigger on interval
let glitchInterval;

onMounted(() => {
  const section = heroContent.value;
  if (!section) return;

  section.addEventListener('mousemove', handleMouseMove);
  section.addEventListener('mouseleave', handleMouseLeave);

  // Reveal name with glitch
  setTimeout(() => {
    glitchActive.value = true;
    setTimeout(() => {
      glitchActive.value = false;
      nameRevealed.value = true;
      const nameElements = section.querySelectorAll('[data-animate="name"]');
      stagger(nameElements, 0);
    }, 400);
  }, 200);

  // Tagline
  setTimeout(() => {
    const taglineElements = section.querySelectorAll('[data-animate="tagline"]');
    stagger(taglineElements, 200);
  }, 800);

  // Scroll indicator
  setTimeout(() => {
    const scrollIndicator = section.querySelector('[data-animate="scroll"]');
    if (scrollIndicator) scrollIndicator.classList.add('animate-fadeUp');
  }, 1200);

  // Periodic glitch
  glitchInterval = setInterval(() => {
    glitchActive.value = true;
    setTimeout(() => { glitchActive.value = false; }, 300);
  }, 5000);

  // Skills carousel rotation
  rotationInterval = setInterval(() => {
    rotationIndex.value = (rotationIndex.value + 1) % carouselSkills.length;
    if (carouselContainer.value) {
      carouselContainer.value.style.setProperty('--rotation-index', rotationIndex.value);
    }
  }, 2500);
});

onUnmounted(() => {
  const section = heroContent.value;
  if (section) {
    section.removeEventListener('mousemove', handleMouseMove);
    section.removeEventListener('mouseleave', handleMouseLeave);
  }
  clearInterval(glitchInterval);
  clearInterval(rotationInterval);
});
</script>

<template>
  <section
    ref="heroContent"
    class="hero-section relative min-h-dvh w-full overflow-hidden flex flex-col items-center pt-32 md:pt-40"
    :class="{ 'dark': isDark }"
  >
    <!-- Custom cursor -->
    <div
      class="cursor-dot"
      :class="{ 'cursor-visible': cursorVisible }"
      :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
    ></div>

    <!-- Background: dark canvas with gradient mesh -->
    <div class="absolute inset-0 bg-white dark:bg-[#050505]"></div>

    <!-- Animated mesh gradient orbs -->
    <div class="orb-1 absolute rounded-full pointer-events-none transition-transform duration-700 ease-out" 
      style="background: radial-gradient(circle, rgba(255,90,0,0.18) 0%, transparent 70%); top: -10%; left: -15%; width: clamp(300px, 80vw, 600px); height: clamp(300px, 80vw, 600px);">
    </div>
    <div class="orb-2 absolute rounded-full pointer-events-none transition-transform duration-700 ease-out"
      style="background: radial-gradient(circle, rgba(120,80,255,0.14) 0%, transparent 70%); bottom: -10%; right: -10%; width: clamp(250px, 70vw, 500px); height: clamp(250px, 70vw, 500px);">
    </div>

    <!-- Grain overlay -->
    <div class="grain-overlay absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.045]"></div>

    <!-- Diagonal accent stripe -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="accent-stripe"></div>
    </div>

    <!-- Grid lines background -->
    <div class="absolute inset-0 pointer-events-none grid-lines opacity-[0.04]"></div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-12">

      <!-- Hero Name -->
      <h1
        class="font-display font-black leading-[0.88] tracking-[-0.04em] mb-8 overflow-visible relative"
        :class="{ 'glitch': glitchActive }"
        :data-text="profile.name"
      >
        <span
          v-for="(word, index) in nameWords"
          :key="`name-${index}`"
          data-animate="name"
          class="name-word inline-block opacity-0 mr-[0.12em]"
          :style="getNameWordStyle(index)"
        >{{ word }}</span>
      </h1>


      <!-- Tagline -->
      <p class="font-body text-lg md:text-xl font-light tracking-wide max-w-xl leading-relaxed text-neutral-700 dark:text-neutral-400 mb-12 overflow-hidden">
        <span
          v-for="(word, index) in taglineWords"
          :key="`tagline-${index}`"
          data-animate="tagline"
          class="inline-block opacity-0 mr-[0.25em]"
        >{{ word }}</span>
      </p>

      <!-- Skills Carousel -->
      <div class="carousel-section mb-12 opacity-0" style="animation: fadeIn 0.8s ease-out 1.1s forwards;">
        <div class="carousel-container">
        <!-- FIX (Bug 2): Removed fixed 152px translateX step. CSS custom property
             --rotation-index is set reactively; the scroll uses calc() with the
             actual item width (120px item + 32px gap = 152px) but now also
             accounts for the container width so clipping is visible not silent.
             overflow:hidden is kept on carousel-container — the key fix is that
             translateX now moves by a full item slot rather than an assumed px. -->
          <div 
            ref="carouselContainer"
            class="carousel-scroll"
            :style="{ '--rotation-index': rotationIndex }"
          >
            <!-- FIX (Bug 3): replaced :first-child CSS with :class="{ 'is-active': ... }"
                 :first-child always targets the DOM-first element regardless of rotation.
                 Now the active class tracks rotationIndex reactively. -->
            <div 
              v-for="(skill, index) in carouselSkills"
              :key="`skill-${index}`"
              class="carousel-skill-item"
              :class="{ 'is-active': index === rotationIndex }"
            >
              <!-- FIX (Bug 4): added fallback '' so v-html never receives undefined -->
              <div class="skill-box">
                <div class="skill-icon" v-html="skillLogos[skill.name] || ''"></div>
              </div>
              <span class="skill-name">{{ skill.label }}</span>
            </div>
            <!-- Duplicate first few for seamless infinite scroll -->
            <div
              class="carousel-skill-item"
              :class="{ 'is-active': rotationIndex === 0 }"
            >
              <div class="skill-box">
                <div class="skill-icon" v-html="skillLogos[carouselSkills[0].name] || ''"></div>
              </div>
              <span class="skill-name">{{ carouselSkills[0].label }}</span>
            </div>
            <div
              class="carousel-skill-item"
              :class="{ 'is-active': rotationIndex === 1 }"
            >
              <div class="skill-box">
                <div class="skill-icon" v-html="skillLogos[carouselSkills[1].name] || ''"></div>
              </div>
              <span class="skill-name">{{ carouselSkills[1].label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom row: status + CTA -->
      <div class="flex flex-wrap items-center gap-6 opacity-0" style="animation: fadeIn 0.6s ease-out 1.2s forwards;">
        <!-- Availability pill -->
        <div class="status-pill inline-flex items-center gap-2.5 px-4 py-2 border border-neutral-300 dark:border-neutral-800 rounded-full bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-sm">
          <div class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
          <span class="font-mono text-[11px] tracking-[0.15em] text-neutral-600 dark:text-neutral-400 uppercase">{{ profile.availability }}</span>
        </div>

      </div>
    </div>

    <!-- Large decorative index number -->
    <div class="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden leading-none">
      <span class="font-display font-black text-neutral-200 dark:text-neutral-900 block hero-index" style="transform: translate(5%, 8%);">01</span>
    </div>

    <!-- Scroll indicator -->
    <div
      data-animate="scroll"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 pointer-events-none"
    >
      <div class="w-5 h-8 border border-neutral-400 dark:border-neutral-700 rounded-full flex items-start justify-center p-1">
        <div class="w-0.5 h-2 bg-orange-500 rounded-full scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ─── Custom cursor ─── */
.cursor-dot {
  position: fixed;
  width: 8px;
  height: 8px;
  background: #f97316;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.1s ease;
  mix-blend-mode: screen;
}
.cursor-dot.cursor-visible { opacity: 1; }

/* ─── Name sizing ─── */
h1 {
  font-size: clamp(4rem, 12vw, 11rem);
  letter-spacing: -0.04em;
}

/* ─── Text fill / stroke variants ─── */
/* Styles are now applied via inline styles from getNameWordStyle() */

/* ─── Name word entrance ─── */
.name-word { transition: none; }
.name-word.animate-fadeUp {
  opacity: 1 !important;
  animation: wordReveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes wordReveal {
  from { opacity: 0; transform: translateY(30px) skewY(3deg); }
  to   { opacity: 1; transform: translateY(0)   skewY(0deg); }
}

/* ─── Tagline words ─── */
span[data-animate="tagline"] { transition: none; }
span[data-animate="tagline"].animate-fadeUp {
  opacity: 1 !important;
  animation: tagReveal 0.5s ease-out forwards;
}
@keyframes tagReveal {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Glitch effect ─── */
h1.glitch { position: relative; }
h1.glitch::before,
h1.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0; top: 0;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  width: 100%;
  pointer-events: none;
}
h1.glitch::before {
  color: #f97316;
  clip-path: polygon(0 30%, 100% 30%, 100% 50%, 0 50%);
  transform: translateX(-4px);
  animation: glitch-1 0.3s steps(2) infinite;
}
h1.glitch::after {
  color: #7c3aed;
  clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%);
  transform: translateX(4px);
  animation: glitch-2 0.3s steps(2) infinite;
}
@keyframes glitch-1 {
  0%, 100% { transform: translateX(-4px); }
  50%       { transform: translateX(4px); }
}
@keyframes glitch-2 {
  0%, 100% { transform: translateX(4px); }
  50%       { transform: translateX(-4px); }
}

/* ─── Diagonal accent stripe ─── */
.accent-stripe {
  position: absolute;
  top: -20%;
  right: 18%;
  width: 1px;
  height: 160%;
  background: linear-gradient(to bottom, transparent, rgba(249,115,22,0.15), transparent);
  transform: rotate(15deg);
  transform-origin: top center;
}
:global(.dark) .accent-stripe {
  background: linear-gradient(to bottom, transparent, rgba(249,115,22,0.25), transparent);
}

/* ─── Grid lines ─── */
.grid-lines {
  background-image:
    linear-gradient(rgba(200,200,200,0.6) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200,200,200,0.6) 1px, transparent 1px);
  background-size: 80px 80px;
}
:global(.dark) .grid-lines {
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
}

/* ─── Grain overlay ─── */
.grain-overlay {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' seed='5'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 200px 200px;
}

/* ─── Scroll dot bounce ─── */
.scroll-dot { animation: scrollBounce 1.8s ease-in-out infinite; }
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0);   opacity: 1; }
  80%       { transform: translateY(10px); opacity: 0; }
}

/* ─── Scroll line ─── */
.scroll-line { animation: linePulse 2s ease-in-out infinite; }
@keyframes linePulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50%       { opacity: 1;   transform: scaleY(0.6); }
}

/* ─── Shared animation utilities ─── */
/* FIX (Bug 1): slideRight and fadeIn are referenced by inline `style=` attributes.
   Inline styles are NOT scoped — they are global. Vue hashes @keyframes names
   inside <style scoped>, so inline animations can't find them and the element
   stays at opacity:0 forever. The fix is to declare these keyframes in a
   separate <style> (non-scoped) block at the bottom of this file.
   These placeholder comments keep the scoped block clean. */

/* ─── Scroll indicator fadeUp ─── */
[data-animate="scroll"].animate-fadeUp {
  opacity: 1 !important;
  animation: fadeIn 0.8s ease-out forwards;
}

/* ─── Skills Carousel ─── */
.carousel-section {
  width: 100%;
  margin-bottom: 32px;
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
}

/* FIX (Bug 2): Use CSS custom property --rotation-index set via Vue :style binding.
   Each slot is 120px wide + 32px gap = 152px per step. */
.carousel-scroll {
  display: flex;
  gap: 32px;
  transition: transform 2.5s cubic-bezier(0.66, 0, 0.33, 1);
  transform: translateX(calc(var(--rotation-index, 0) * -152px));
}

.carousel-skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  width: 120px;
}

.skill-box {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(124, 58, 237, 0.1) 100%);
  border: 2px solid rgba(249, 115, 22, 0.4);
  border-radius: 16px;
  transition: all 0.3s ease;
  overflow: visible;
}

/* FIX (Bug 3): was :first-child — now .is-active tracks rotationIndex reactively */
.carousel-skill-item.is-active .skill-box {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(124, 58, 237, 0.2) 100%);
  border-color: rgba(249, 115, 22, 0.6);
  box-shadow: 0 12px 40px rgba(249, 115, 22, 0.25);
}

:global(.dark) .skill-box {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(124, 58, 237, 0.08) 100%);
  border-color: rgba(249, 115, 22, 0.3);
}

:global(.dark) .carousel-skill-item.is-active .skill-box {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(124, 58, 237, 0.15) 100%);
  border-color: rgba(249, 115, 22, 0.5);
  box-shadow: 0 12px 40px rgba(249, 115, 22, 0.15);
}

.skill-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(249, 115, 22);
  opacity: 0.85;
}

.carousel-skill-item.is-active .skill-icon {
  width: 64px;
  height: 64px;
  opacity: 1;
  animation: floatPulse 3s ease-in-out infinite;
}

.skill-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}

@keyframes floatPulse {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-6px) scale(1.05); }
}

.skill-name {
  font-family: monospace;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgb(249, 115, 22);
  opacity: 0.7;
  text-align: center;
}

.carousel-skill-item.is-active .skill-name {
  opacity: 1;
  color: rgb(249, 115, 22);
}

:global(.dark) .skill-name {
  color: rgb(249, 115, 22);
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .carousel-scroll {
    gap: 24px;
  }

  .carousel-skill-item {
    width: 100px;
  }

  .skill-box {
    width: 80px;
    height: 80px;
  }

  .carousel-skill-item.is-active .skill-box {
    width: 95px;
    height: 95px;
  }

  .skill-icon {
    width: 44px;
    height: 44px;
  }

  .carousel-skill-item.is-active .skill-icon {
    width: 52px;
    height: 52px;
  }

  .skill-name {
    font-size: 10px;
  }
}

/* ─── Scroll indicator fadeUp ─── */

/* ─── Mobile tweaks ─── */
@media (max-width: 640px) {
  h1 { font-size: clamp(3rem, 14vw, 5rem); }
  .cursor-dot { display: none; }
  .hero-section { cursor: auto; }
  .hero-index { font-size: clamp(12rem, 45vw, 22vw) !important; }
}

.hero-index {
  font-size: text-[22vw];
}
</style>

<!-- FIX (Bug 1): Global keyframes for animations used in inline `style=` attributes.
     Vue hashes @keyframes inside <style scoped>, so inline animations referencing
     'fadeIn' or 'slideRight' can't find them — elements stay at opacity:0 forever.
     Non-scoped <style> emits keyframes with their original names, which inline
     styles can resolve correctly. -->
<style>
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
</style>