<script setup>
defineProps({
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
</script>

<template>
  <span
    :class="[
      'inline-block px-3 py-1.5 rounded font-mono text-xs font-medium tracking-wide transition-all duration-200',
      variant === 'default' && 'bg-warm-gray text-black hover:bg-black hover:text-white border border-warm-gray',
      variant === 'dark' && 'bg-black text-white border border-black hover:bg-dark-gray',
      variant === 'outline' && 'bg-transparent text-black border border-black hover:bg-black hover:text-white'
    ]"
  >
    {{ label }}
  </span>
</template>

<style scoped>
/* Smooth transitions */
span {
  cursor: default;
}
</style>
