<script setup>
import { computed } from 'vue';
import { getSkillLogo } from '../../data/skillLogos.js';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'dark', 'outline'].includes(value)
  }
});

const logoSvg = computed(() => getSkillLogo(props.label));
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs font-medium tracking-wide transition-all duration-200',
      variant === 'default' && 'bg-warm-gray text-black hover:bg-black hover:text-white border border-warm-gray',
      variant === 'dark' && 'bg-black text-white border border-black hover:bg-dark-gray',
      variant === 'outline' && 'bg-transparent text-black border border-black hover:bg-black hover:text-white'
    ]"
  >
    <span v-if="logoSvg" class="w-3.5 h-3.5 inline-flex items-center justify-center flex-shrink-0">
      <svg 
        v-html="logoSvg" 
        class="w-full h-full"
        style="stroke-width: 0; stroke: currentColor; fill: currentColor;"
      />
    </span>
    {{ label }}
  </span>
</template>

<style scoped>
/* Smooth transitions */
span {
  cursor: default;
}
</style>
