import { ref, onMounted, watch } from 'vue';

export function useDarkMode() {
  const isDark = ref(false);

  // Initialize from localStorage or system preference
  onMounted(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      isDark.value = saved === 'dark';
    } else {
      // Check system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    applyTheme();
  });

  // Watch for changes and apply theme
  watch(isDark, () => {
    applyTheme();
  });

  const applyTheme = () => {
    const html = document.documentElement;
    if (isDark.value) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggle = () => {
    isDark.value = !isDark.value;
  };

  return {
    isDark,
    toggle
  };
}
