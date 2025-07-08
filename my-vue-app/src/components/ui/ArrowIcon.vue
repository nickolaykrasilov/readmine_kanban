<script setup>
defineProps({
  direction: {
    type: String,
    default: 'down', // 'up' | 'down' | 'left' | 'right'
    validator: (value) => ['up', 'down', 'left', 'right'].includes(value)
  },
  color: {
    type: String,
    default: 'currentColor'
  }
})

const paths = {
  down: 'M1 1L5 5L9 1',
  up: 'M1 5L5 1L9 5',
  left: 'M5 1L1 5L5 9',
  right: 'M1 5L5 1L9 5'
}
</script>

<template>
  <svg 
    class="arrow-icon"
    viewBox="0 0 10 10"
    :style="{ color: color }"
  >
    <path 
      :d="paths[direction]"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
  </svg>
</template>

<style scoped>
.arrow-icon {
  width: 10px;
  height: 10px;
  display: inline-block;
  vertical-align: middle;
  transition: transform 0.2s ease;
}
</style>