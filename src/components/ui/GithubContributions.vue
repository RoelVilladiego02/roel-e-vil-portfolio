<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { profile } from '../../data/portfolio.js';

const username = profile.socials.github.split('/').filter(Boolean).at(-1);
const contributions = ref([]);
const contributionTotal = ref(0);
const isLoading = ref(true);
const loadError = ref('');
const weeks = computed(() => {
  if (contributions.value.length === 0) return [];

  const firstDate = new Date(`${contributions.value[0].date}T00:00:00Z`);
  const paddedDays = [
    ...Array(firstDate.getUTCDay()).fill(null),
    ...contributions.value
  ];

  return Array.from(
    { length: Math.ceil(paddedDays.length / 7) },
    (_, weekIndex) => paddedDays.slice(weekIndex * 7, weekIndex * 7 + 7)
  );
});

let requestController;

const loadContributions = async () => {
  requestController = new AbortController();
  isLoading.value = true;
  loadError.value = '';

  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,
      { signal: requestController.signal }
    );

    if (!response.ok) {
      throw new Error(`GitHub contributions could not be loaded (HTTP ${response.status}).`);
    }

    const data = await response.json();
    if (
      !Array.isArray(data.contributions)
      || typeof data.total?.lastYear !== 'number'
      || data.contributions.some((day) => (
        typeof day.date !== 'string'
        || !Number.isInteger(day.count)
        || !Number.isInteger(day.level)
        || day.level < 0
        || day.level > 4
      ))
    ) {
      throw new Error('GitHub returned contribution data in an unexpected format.');
    }

    contributions.value = data.contributions;
    contributionTotal.value = data.total.lastYear;
  } catch (error) {
    if (error.name !== 'AbortError') {
      loadError.value = error.message || 'Unable to load GitHub contributions.';
    }
  } finally {
    if (!requestController.signal.aborted) {
      isLoading.value = false;
    }
  }
};

onMounted(loadContributions);
onUnmounted(() => requestController?.abort());
</script>

<template>
  <section class="github-contributions" aria-labelledby="contributions-title">
    <div class="contributions-header">
      <div>
        <p class="contributions-eyebrow">GITHUB ACTIVITY</p>
        <h2 id="contributions-title">A year of building</h2>
      </div>
      <a
        :href="profile.socials.github"
        target="_blank"
        rel="noopener noreferrer"
        class="contributions-profile-link"
      >
        {{ username }} <span aria-hidden="true">↗</span>
      </a>
    </div>

    <div v-if="isLoading" class="contributions-state" role="status">
      Loading GitHub contributions…
    </div>

    <div v-else-if="loadError" class="contributions-state contributions-error" role="alert">
      <span>{{ loadError }}</span>
      <button type="button" @click="loadContributions">Try again</button>
    </div>

    <template v-else>
      <div class="contributions-summary">
        <span class="contributions-total">{{ contributionTotal.toLocaleString() }}</span>
        <span class="contributions-total-label">contributions in the last year</span>
      </div>

      <div class="contributions-calendar-scroll">
        <div class="contributions-calendar">
          <div class="contributions-weekdays" aria-hidden="true">
            <span></span>
            <span>Mon</span>
            <span></span>
            <span>Wed</span>
            <span></span>
            <span>Fri</span>
            <span></span>
          </div>
          <div
            class="contributions-grid"
            role="img"
            :aria-label="`${contributionTotal} GitHub contributions in the last year`"
          >
            <div
              v-for="(week, weekIndex) in weeks"
              :key="weekIndex"
              class="contributions-week"
            >
              <span
                v-for="(day, dayIndex) in week"
                :key="day?.date || `empty-${weekIndex}-${dayIndex}`"
                class="contribution-day"
                :class="day ? `contribution-level-${day.level}` : 'contribution-empty'"
                :title="day ? `${day.count} contributions on ${day.date}` : undefined"
                :aria-hidden="day ? undefined : 'true'"
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div class="contributions-legend" aria-label="Contribution activity scale">
        <span>Less</span>
        <span class="contribution-day contribution-level-0"></span>
        <span class="contribution-day contribution-level-1"></span>
        <span class="contribution-day contribution-level-2"></span>
        <span class="contribution-day contribution-level-3"></span>
        <span class="contribution-day contribution-level-4"></span>
        <span>More</span>
      </div>
    </template>
  </section>
</template>
