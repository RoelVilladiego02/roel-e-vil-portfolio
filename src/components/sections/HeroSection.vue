<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { profile } from '../../data/portfolio.js';
import { useStaggerAnimation } from '../../composables/useScrollAnimation.js';

const heroContent = ref(null);
const nameWords = profile.name.split(' ');
const taglineWords = profile.tagline.split(' ');
const cursorX = ref(0);
const cursorY = ref(0);
const cursorVisible = ref(false);
const glitchActive = ref(false);
const nameRevealed = ref(false);

const { stagger } = useStaggerAnimation(80);

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
});

onUnmounted(() => {
  const section = heroContent.value;
  if (section) {
    section.removeEventListener('mousemove', handleMouseMove);
    section.removeEventListener('mouseleave', handleMouseLeave);
  }
  clearInterval(glitchInterval);
});
</script>

<template>
  <section
    ref="heroContent"
    class="hero-section relative h-dvh w-full overflow-hidden flex flex-col items-center justify-center"
  >
    <!-- Custom cursor -->
    <div
      class="cursor-dot"
      :class="{ 'cursor-visible': cursorVisible }"
      :style="{ left: `${cursorX}px`, top: `${cursorY}px` }"
    ></div>

    <!-- Background: dark canvas with gradient mesh -->
    <div class="absolute inset-0 bg-[#0a0a0a]"></div>

    <!-- Animated mesh gradient orbs -->
    <div class="orb-1 absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
      style="background: radial-gradient(circle, rgba(255,90,0,0.18) 0%, transparent 70%); top: -10%; left: -15%;">
    </div>
    <div class="orb-2 absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-transform duration-700 ease-out"
      style="background: radial-gradient(circle, rgba(120,80,255,0.14) 0%, transparent 70%); bottom: -10%; right: -10%;">
    </div>

    <!-- Grain overlay -->
    <div class="grain-overlay absolute inset-0 pointer-events-none opacity-[0.045]"></div>

    <!-- Diagonal accent stripe -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="accent-stripe"></div>
    </div>

    <!-- Grid lines background -->
    <div class="absolute inset-0 pointer-events-none grid-lines opacity-[0.04]"></div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">

      <!-- Eyebrow label -->
      <div class="eyebrow mb-6 opacity-0" style="animation: slideRight 0.6s ease-out 0.3s forwards;">
        <span class="font-mono text-xs tracking-[0.3em] text-orange-500 uppercase">Portfolio — {{ new Date().getFullYear() }}</span>
        <span class="mx-3 text-neutral-700">|</span>
        <span class="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase">Creative Developer</span>
      </div>

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
          :class="index % 2 === 1 ? 'text-stroke' : 'text-fill'"
        >{{ word }}</span>
      </h1>

      <!-- Horizontal rule with label -->
      <div class="flex items-center gap-4 mb-8 opacity-0" style="animation: fadeIn 0.5s ease-out 0.9s forwards;">
        <div class="h-px bg-neutral-700 flex-1 max-w-[80px]"></div>
        <span class="font-mono text-[10px] text-neutral-600 tracking-[0.2em] uppercase">About me</span>
      </div>

      <!-- Tagline -->
      <p class="font-body text-lg md:text-xl font-light tracking-wide max-w-xl leading-relaxed text-neutral-400 mb-12 overflow-hidden">
        <span
          v-for="(word, index) in taglineWords"
          :key="`tagline-${index}`"
          data-animate="tagline"
          class="inline-block opacity-0 mr-[0.25em]"
        >{{ word }}</span>
      </p>

      <!-- Bottom row: status + CTA -->
      <div class="flex flex-wrap items-center gap-6 opacity-0" style="animation: fadeIn 0.6s ease-out 1.2s forwards;">
        <!-- Availability pill -->
        <div class="status-pill inline-flex items-center gap-2.5 px-4 py-2 border border-neutral-800 rounded-full bg-neutral-900/60 backdrop-blur-sm">
          <div class="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
          <span class="font-mono text-[11px] tracking-[0.15em] text-neutral-400 uppercase">{{ profile.availability }}</span>
        </div>

        <!-- Arrow CTA -->
        <button class="cta-btn group inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors duration-300">
          <span>View Work</span>
          <span class="cta-arrow inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </button>
      </div>
    </div>

    <!-- Large decorative index number -->
    <div class="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden leading-none">
      <span class="font-display font-black text-[22vw] text-neutral-900 block" style="transform: translate(5%, 8%);">01</span>
    </div>

    <!-- Vertical text on left -->
    <div class="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 pointer-events-none opacity-0"
      style="animation: fadeIn 0.6s ease-out 1.4s forwards;">
      <div class="h-16 w-px bg-neutral-800"></div>
      <span class="font-mono text-[9px] tracking-[0.3em] text-neutral-700 uppercase" style="writing-mode: vertical-rl;">Scroll Down</span>
      <div class="h-8 w-px bg-neutral-800 scroll-line"></div>
    </div>

    <!-- Scroll indicator -->
    <div
      data-animate="scroll"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 pointer-events-none"
    >
      <div class="w-5 h-8 border border-neutral-700 rounded-full flex items-start justify-center p-1">
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
.text-fill  { color: #ffffff; }
.text-stroke {
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.5);
}

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
  background: linear-gradient(to bottom, transparent, rgba(249,115,22,0.25), transparent);
  transform: rotate(15deg);
  transform-origin: top center;
}

/* ─── Grid lines ─── */
.grid-lines {
  background-image:
    linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px);
  background-size: 80px 80px;
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
@keyframes slideRight {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* ─── Scroll indicator fadeUp ─── */
[data-animate="scroll"].animate-fadeUp {
  opacity: 1 !important;
  animation: fadeIn 0.8s ease-out forwards;
}

/* ─── Mobile tweaks ─── */
@media (max-width: 640px) {
  h1 { font-size: clamp(3rem, 14vw, 5rem); }
  .cursor-dot { display: none; }
  .hero-section { cursor: auto; }
}
</style>