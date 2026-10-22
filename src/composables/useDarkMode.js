import { ref, onMounted, watch } from 'vue';

// Create isDark as a module-level singleton so all components share the same state
const isDark = ref(true);
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
    }

    // The portfolio defaults to dark; a saved preference always takes priority.
  });

  const toggle = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggle
  };
}