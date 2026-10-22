<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import emailjs from '@emailjs/browser';
import { profile } from '../../data/portfolio.js';

// Initialize EmailJS (use environment variables in production)
const EMAILJS_SERVICE_ID = 'service_2s9vwpn';
const EMAILJS_TEMPLATE_ID = 'template_d071qee';
const EMAILJS_PUBLIC_KEY = 'dxgf361kN4o7ImTIk';
const RATE_LIMIT_SECONDS = 60; // 1 submission per 60 seconds
const RATE_LIMIT_KEY = 'contact_form_last_submission';

// Initialize EmailJS
try {
  emailjs.init(EMAILJS_PUBLIC_KEY);
} catch (error) {
  console.warn('EmailJS not configured. Please set up your EmailJS credentials.');
}

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const formState = ref({
  isSubmitting: false,
  success: false,
  error: null
});

const rateLimitState = ref({
  isLimited: false,
  secondsRemaining: 0
});

let countdownInterval = null;

// Check if rate limited on mount
onMounted(() => {
  checkRateLimit();
});

// Cleanup interval on unmount
onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});

const checkRateLimit = () => {
  const lastSubmission = localStorage.getItem(RATE_LIMIT_KEY);
  
  if (!lastSubmission) {
    rateLimitState.value.isLimited = false;
    rateLimitState.value.secondsRemaining = 0;
    return;
  }

  const lastSubmissionTime = parseInt(lastSubmission, 10);
  const currentTime = Date.now();
  const secondsElapsed = Math.floor((currentTime - lastSubmissionTime) / 1000);
  const secondsRemaining = RATE_LIMIT_SECONDS - secondsElapsed;

  if (secondsRemaining > 0) {
    rateLimitState.value.isLimited = true;
    rateLimitState.value.secondsRemaining = secondsRemaining;
    startCountdown();
  } else {
    rateLimitState.value.isLimited = false;
    rateLimitState.value.secondsRemaining = 0;
  }
};

const startCountdown = () => {
  // Clear any existing interval
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(() => {
    rateLimitState.value.secondsRemaining--;

    if (rateLimitState.value.secondsRemaining <= 0) {
      rateLimitState.value.isLimited = false;
      rateLimitState.value.secondsRemaining = 0;
      clearInterval(countdownInterval);
    }
  }, 1000);
};

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
};

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Check rate limit
  if (rateLimitState.value.isLimited) {
    formState.value.error = `Please wait ${rateLimitState.value.secondsRemaining} second${rateLimitState.value.secondsRemaining !== 1 ? 's' : ''} before sending another message.`;
    return;
  }

  // Validate form
  if (!formData.value.name || !formData.value.email || !formData.value.subject || !formData.value.message) {
    formState.value.error = 'Please fill in all fields.';
    return;
  }

  formState.value.isSubmitting = true;
  formState.value.error = null;

  try {
    // Send email using EmailJS
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: profile.email,
        name: formData.value.name,
        email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
      }
    );

    // Set rate limit
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
    rateLimitState.value.isLimited = true;
    rateLimitState.value.secondsRemaining = RATE_LIMIT_SECONDS;
    startCountdown();

    formState.value.success = true;
    resetForm();

    // Clear success message after 5 seconds
    setTimeout(() => {
      formState.value.success = false;
    }, 5000);
  } catch (error) {
    console.error('Email sending failed:', error);
    formState.value.error = 'Failed to send message. Please try again or email directly at ' + profile.email;
  } finally {
    formState.value.isSubmitting = false;
  }
};

const isSubmitDisabled = computed(() => {
  return formState.value.isSubmitting || rateLimitState.value.isLimited;
});
</script>

<template>
  <div class="w-full max-w-2xl mx-auto">
    <form @submit="handleSubmit" class="space-y-6">
      <!-- Success Message -->
      <div
        v-if="formState.success"
        class="contact-notice contact-notice--success"
        role="status"
        aria-live="polite"
      >
        <span class="contact-notice-icon" aria-hidden="true">✓</span>
        <span class="contact-notice-copy">
          <span class="contact-notice-label">Message delivered</span>
          <span class="contact-notice-message">Thanks for reaching out. I'll get back to you soon.</span>
        </span>
      </div>

      <!-- Error Message -->
      <div
        v-if="formState.error"
        class="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg"
      >
        {{ formState.error }}
      </div>

      <!-- Rate Limit Warning -->
      <div
        v-if="rateLimitState.isLimited"
        class="contact-notice contact-notice--wait"
        role="status"
        aria-live="polite"
      >
        <svg class="contact-notice-clock" aria-hidden="true" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <span class="contact-notice-copy">
          <span class="contact-notice-label">A short pause</span>
          <span class="contact-notice-message">
            Please wait
            <span class="contact-notice-countdown">{{ rateLimitState.secondsRemaining }}</span>
            second<span v-if="rateLimitState.secondsRemaining !== 1">s</span>
            before sending another message.
          </span>
        </span>
      </div>

      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-semibold mb-2">Your Name</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          placeholder="John Doe"
          required
          class="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors"
          :disabled="formState.isSubmitting"
        />
      </div>

      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-semibold mb-2">Your Email</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          placeholder="john@example.com"
          required
          class="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors"
          :disabled="formState.isSubmitting"
        />
      </div>

      <!-- Subject Field -->
      <div>
        <label for="subject" class="block text-sm font-semibold mb-2">Subject</label>
        <input
          id="subject"
          v-model="formData.subject"
          type="text"
          placeholder="Project Inquiry"
          required
          class="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors"
          :disabled="formState.isSubmitting"
        />
      </div>

      <!-- Message Field -->
      <div>
        <label for="message" class="block text-sm font-semibold mb-2">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          placeholder="Tell me about your project..."
          rows="6"
          required
          class="w-full px-4 py-3 bg-white/50 dark:bg-black/50 border border-black/20 dark:border-white/20 rounded-lg focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
          :disabled="formState.isSubmitting"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitDisabled"
        class="w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span v-if="formState.isSubmitting">Sending...</span>
        <span v-else-if="rateLimitState.isLimited">Wait {{ rateLimitState.secondsRemaining }}s</span>
        <span v-else>Send Message</span>
      </button>

      <!-- Fallback Email Link -->
      <p class="text-center text-sm text-black/60 dark:text-white/60">
        Or email directly at
        <a
          :href="`mailto:${profile.email}`"
          class="font-semibold hover:underline"
        >
          {{ profile.email }}
        </a>
      </p>
    </form>
  </div>
</template>

<style scoped>
/* Override browser autocomplete styling */
input:-webkit-autofill,
textarea:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.5) inset !important;
  -webkit-text-fill-color: #000 !important;
}

/* Dark mode autocomplete override */
:root[class*="dark"] input:-webkit-autofill,
:root[class*="dark"] textarea:-webkit-autofill,
.dark input:-webkit-autofill,
.dark textarea:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5) inset !important;
  -webkit-text-fill-color: #fff !important;
}

/* Also remove the default border that appears on autofill */
input:-webkit-autofill:focus,
textarea:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.5) inset !important;
  -webkit-text-fill-color: #000 !important;
  border-color: #000 !important;
}

.dark input:-webkit-autofill:focus,
.dark textarea:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5) inset !important;
  -webkit-text-fill-color: #fff !important;
  border-color: #fff !important;
}
</style>
