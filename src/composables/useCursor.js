import { ref, onMounted, onUnmounted } from 'vue';

export function useCursor() {
  const cursor = ref({
    x: 0,
    y: 0,
    scale: 1,
    active: false
  });

  const handleMouseMove = (e) => {
    cursor.value.x = e.clientX;
    cursor.value.y = e.clientY;
  };

  const handleMouseEnter = (e) => {
    const target = e.target;
    if (target.matches('a, button, [data-interactive]')) {
      cursor.value.scale = 1.5;
      cursor.value.active = true;
    }
  };

  const handleMouseLeave = () => {
    cursor.value.scale = 1;
    cursor.value.active = false;
  };

  onMounted(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
  });

  onUnmounted(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseenter', handleMouseEnter, true);
    document.removeEventListener('mouseleave', handleMouseLeave, true);
  });

  return {
    cursor
  };
}
