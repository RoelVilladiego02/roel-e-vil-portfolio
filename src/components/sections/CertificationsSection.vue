<script setup>
import { ref } from 'vue';
import { certificates } from '../../data/portfolio.js';

const certificateDialog = ref(null);
const selectedCertificate = ref(null);

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

      <div class="certifications-grid">
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
            <span aria-hidden="true">✓</span>
          </button>
        </article>
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
.certifications-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.certificate-card {
  display: flex;
  min-width: 0;
  min-height: 390px;
  flex-direction: column;
  border: 1px solid var(--line-color);
  padding: 22px;
  background: var(--page-bg);
}

.certificate-card:last-child:nth-child(odd) {
  grid-column: 1 / -1;
  width: calc(50% - 8px);
  justify-self: center;
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
  height: 250px;
  margin-top: 20px;
  place-items: center;
  isolation: isolate;
  overflow: hidden;
  border: 1px solid var(--line-color);
  background: var(--panel-bg);
}

.certificate-preview img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: filter 300ms ease, transform 500ms ease;
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
  outline: 2px solid var(--text-color);
  outline-offset: -3px;
}

.certificate-preview::before,
.certificate-preview::after {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
  content: '';
  opacity: 0;
  transition: opacity 300ms ease;
}

.certificate-preview::before {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.48'/%3E%3C/svg%3E");
  mix-blend-mode: multiply;
}

.certificate-preview::after {
  background-image: radial-gradient(circle, rgb(0 0 0 / 58%) 1px, transparent 1.4px);
  background-size: 5px 5px;
  mix-blend-mode: multiply;
}

.certificate-card:hover .certificate-preview img,
.certificate-card:focus-within .certificate-preview img {
  filter: grayscale(1) contrast(1.08);
  transform: scale(1.025);
}

.certificate-card:hover .certificate-preview::before,
.certificate-card:focus-within .certificate-preview::before {
  opacity: 0.2;
}

.certificate-card:hover .certificate-preview::after,
.certificate-card:focus-within .certificate-preview::after {
  opacity: 0.58;
}

.certificate-card-content {
  flex: 1;
  padding: 36px 0 28px;
}

.certificate-preview + .certificate-card-content {
  padding-top: 20px;
}

.certificate-card h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.025em;
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
  padding-top: 15px;
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
  color: var(--muted-color);
  cursor: zoom-in;
  text-align: left;
}

.certificate-preview-action:hover {
  color: var(--text-color);
}

.certificate-link span {
  font-size: 16px;
}

.certificate-dialog {
  width: min(1000px, calc(100vw - 32px));
  max-width: none;
  max-height: min(92vh, 1000px);
  border: 1px solid var(--line-color);
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
  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .certificate-card {
    grid-column: auto;
    width: auto;
    min-height: 360px;
    justify-self: stretch;
  }

  .certificate-preview {
    height: 230px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .certificate-preview img,
  .certificate-preview::before,
  .certificate-preview::after {
    transition: none;
  }
}
</style>
