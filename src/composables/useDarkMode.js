import { ref, onMounted, watch } from 'vue';

// Create isDark as a module-level singleton so all components share the same state
const isDark = ref(false);
let initialized = false;

const applyTheme = (dark) => {
  const html = document.documentElement;
  if (dark) {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

// Watch immediately so any change (including the first set) applies the theme
watch(isDark, (val) => applyTheme(val), { immediate: true });

export function useDarkMode() {
  onMounted(() => {
    // Only initialize once
    if (initialized) return;
    initialized = true;

    const saved = localStorage.getItem('theme');
    if (saved) {
      isDark.value = saved === 'dark';
    } else {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Also listen for OS-level theme changes (e.g. user switches system theme)
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        // Only follow OS if the user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
          isDark.value = e.matches;
        }
      });
  });

  const toggle = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggle
  };
}