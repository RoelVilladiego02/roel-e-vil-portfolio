<script setup>
import { ref } from 'vue';
import { certificates } from '../../data/portfolio.js';

const certificateDialog = ref(null);
const selectedCertificate = ref(null);
const certificateTrack = ref(null);

const scrollCertificates = (direction) => {
  if (!certificateTrack.value) return;

  certificateTrack.value.scrollBy({
    left: direction * certificateTrack.value.clientWidth * 0.85,
    behavior: 'smooth'
  });
};

const openCertificatePreview = (certificate) => {
  selectedCertificate.value = certificate;
  certificateDialog.value?.showModal();
};

const closeCertificatePreview = () => {
  if (certificateDialog.value?.open) {
    certificateDialog.value.close();
  }
};

const closeOnBackdrop = (event) => {
  if (event.target === certificateDialog.value) {
    closeCertificatePreview();
  }
};
</script>

<template>
  <section
    id="certifications"
    class="relative bg-off-white dark:bg-black py-section-pad px-6 md:px-8 transition-colors duration-300"
    aria-labelledby="certifications-heading"
  >
    <div class="max-w-7xl mx-auto">
      <div class="mb-12 md:mb-16">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-0.5 bg-black dark:bg-white"></div>
          <span class="font-mono text-xs font-bold tracking-widest dark:text-white/80">LEARNING & GROWTH</span>
        </div>
        <h2 id="certifications-heading" class="font-display font-black text-section leading-tight dark:text-white">
          Certifications
        </h2>
        <p class="mt-5 max-w-2xl text-sm leading-7 text-dark-gray/70 dark:text-white/60 md:text-base">
          A collection of certificates and completed learning experiences.
        </p>
      </div>

      <div class="certifications-carousel">
        <div class="carousel-toolbar">
          <span>{{ String(certificates.length).padStart(2, '0') }} certificates</span>
          <div class="carousel-controls" aria-label="Certificate carousel controls">
            <button
              class="carousel-control"
              type="button"
              aria-label="Show previous certificates"
              @click="scrollCertificates(-1)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
              </svg>
            </button>
            <button
              class="carousel-control"
              type="button"
              aria-label="Show next certificates"
              @click="scrollCertificates(1)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14m0 0-7-7m7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref="certificateTrack"
          class="certifications-track"
          role="region"
          aria-label="Certificates"
          aria-roledescription="carousel"
        >
          <article
            v-for="certificate in certificates"
            :key="certificate.id"
            class="certificate-card"
          >
            <div class="certificate-card-top">
              <span class="certificate-number">{{ certificate.id }}</span>
              <span class="certificate-type">CERTIFICATE</span>
            </div>
            <div v-if="certificate.preview" class="certificate-preview">
              <button
                v-if="!certificate.link"
                class="certificate-preview-button"
                type="button"
                :aria-label="`Enlarge ${certificate.title}`"
                aria-haspopup="dialog"
                @click="openCertificatePreview(certificate)"
              >
                <img :src="certificate.preview" :alt="`${certificate.title} preview`" loading="lazy" />
              </button>
              <img
                v-else
                :src="certificate.preview"
                :alt="`${certificate.title} preview`"
                loading="lazy"
              />
            </div>
            <div class="certificate-card-content">
              <h3>{{ certificate.title }}</h3>
              <p>{{ certificate.issuer }}</p>
            </div>
            <a
              v-if="certificate.link"
              class="certificate-link"
              :href="certificate.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`View ${certificate.title}`"
            >
              View certificate
              <span aria-hidden="true">↗</span>
            </a>
            <button
              v-else
              class="certificate-link certificate-preview-action"
              type="button"
              @click="openCertificatePreview(certificate)"
            >
              Enlarge certificate
              <span aria-hidden="true">↗</span>
            </button>
          </article>
        </div>
      </div>

      <dialog
        ref="certificateDialog"
        class="certificate-dialog"
        aria-labelledby="certificate-dialog-title"
        @click="closeOnBackdrop"
        @close="selectedCertificate = null"
      >
        <div v-if="selectedCertificate" class="certificate-dialog-content">
          <div class="certificate-dialog-header">
            <div>
              <h3 id="certificate-dialog-title">{{ selectedCertificate.title }}</h3>
              <p>{{ selectedCertificate.issuer }}</p>
            </div>
            <button
              class="certificate-dialog-close"
              type="button"
              aria-label="Close certificate preview"
              @click="closeCertificatePreview"
            >
              ×
            </button>
          </div>
          <img
            class="certificate-dialog-image"
            :src="selectedCertificate.preview"
            :alt="selectedCertificate.title"
          />
        </div>
      </dialog>
    </div>
  </section>
</template>

<style scoped>
.certifications-carousel {
  min-width: 0;
}

.carousel-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  color: var(--muted-color);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.04em;
}

.carousel-controls {
  display: flex;
  gap: 8px;
}

.carousel-control {
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid var(--line-color);
  border-radius: 50%;
  background: transparent;
  color: var(--text-color);
  cursor: pointer;
  transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease;
}

.carousel-control:hover {
  border-color: var(--text-color);
  background: var(--text-color);
  color: var(--page-bg);
}

.carousel-control svg {
  width: 17px;
  height: 17px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5;
}

.certifications-track {
  display: flex;
  gap: 18px;
  overflow-x: auto;
  padding: 2px 2px 12px;
  scroll-padding-inline: 2px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.certifications-track::-webkit-scrollbar {
  display: none;
}

.certificate-card {
  display: flex;
  flex: 0 0 calc((100% - 36px) / 3);
  min-width: 0;
  min-height: 405px;
  flex-direction: column;
  border: 1px solid var(--line-color);
  border-radius: 14px;
  padding: 16px;
  background: var(--panel-bg);
  scroll-snap-align: start;
  transition: transform 200ms ease, border-color 200ms ease, background-color 200ms ease;
}

.certificate-card:hover,
.certificate-card:focus-within {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--muted-color) 55%, var(--line-color));
}

.certificate-card-top,
.certificate-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.certificate-number,
.certificate-type {
  color: var(--muted-color);
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 10px;
}

.certificate-type {
  letter-spacing: 0.1em;
}

.certificate-preview {
  position: relative;
  display: grid;
  height: 225px;
  margin-top: 16px;
  place-items: center;
  overflow: hidden;
  border: 1px solid var(--line-color);
  border-radius: 9px;
  background:
    radial-gradient(ellipse at 50% 100%, color-mix(in srgb, var(--muted-color) 14%, transparent), transparent 62%),
    var(--page-bg);
}

.certificate-preview img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
  transition: transform 400ms ease;
}

.certificate-card:hover .certificate-preview img,
.certificate-card:focus-within .certificate-preview img {
  transform: scale(1.035);
}

.certificate-preview-button {
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: zoom-in;
}

.certificate-preview-button:focus-visible {
  outline-offset: -4px;
}

.certificate-card-content {
  flex: 1;
  padding: 22px 0 20px;
}

.certificate-preview + .certificate-card-content {
  padding-top: 17px;
}

.certificate-card h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.4;
}

.certificate-card p {
  margin: 10px 0 0;
  overflow-wrap: anywhere;
  color: var(--muted-color);
  font-size: 12px;
  line-height: 1.6;
}

.certificate-link {
  border-top: 1px solid var(--line-color);
  padding-top: 13px;
  color: var(--text-color);
  font-size: 12px;
  transition: color 160ms ease;
}

.certificate-link:hover {
  color: var(--muted-color);
}

.certificate-preview-action {
  width: 100%;
  background: transparent;
  cursor: zoom-in;
  text-align: left;
}

.certificate-link span {
  font-size: 16px;
}

.certificate-dialog {
  width: min(1000px, calc(100vw - 32px));
  max-width: none;
  max-height: min(92vh, 1000px);
  border: 1px solid var(--line-color);
  border-radius: 14px;
  padding: 0;
  overflow: auto;
  background: var(--page-bg);
  color: var(--text-color);
}

.certificate-dialog::backdrop {
  background: rgb(0 0 0 / 78%);
  backdrop-filter: blur(5px);
}

.certificate-dialog-content {
  padding: clamp(16px, 3vw, 28px);
}

.certificate-dialog-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 18px;
}

.certificate-dialog-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.certificate-dialog-header p {
  margin: 6px 0 0;
  color: var(--muted-color);
  font-size: 12px;
}

.certificate-dialog-close {
  display: grid;
  width: 36px;
  height: 36px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid var(--line-color);
  background: transparent;
  color: var(--text-color);
  cursor: pointer;
  font-size: 24px;
  line-height: 1;
}

.certificate-dialog-image {
  display: block;
  width: 100%;
  max-height: calc(92vh - 110px);
  object-fit: contain;
}

@media (max-width: 600px) {
  .certificate-card {
    flex-basis: min(84vw, 340px);
    min-height: 390px;
  }

  .certificate-preview {
    height: 205px;
  }
}

@media (min-width: 601px) and (max-width: 1000px) {
  .certificate-card {
    flex-basis: calc((100% - 18px) / 2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel-control,
  .certificate-card,
  .certificate-preview img,
  .certificate-link {
    transition: none;
  }
}
</style>
