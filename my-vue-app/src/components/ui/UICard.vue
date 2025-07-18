<script setup>
defineProps({
  title: {
    type: String, 
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
});
  
defineEmits(['details-click']);
</script>

<template>
  <div class="card">
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-subtitle">{{ subtitle }}</p>
      <button class="card-button" @click="$emit('details-click')">
        More details
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-card.scss';
</style>  
