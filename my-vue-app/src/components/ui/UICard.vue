<template>
  <div class="card">
    <h3 class="card-title">
      {{ cardData.title }}
    </h3>
    
    <!-- Слот для иконки -->
    <slot name="icon">
      <!-- Fallback, если иконка не передана -->
      <YourIcon size="72" class="icons" />
    </slot>
    
    <p class="card-subtitle">
      {{ cardData.description }}
    </p>
    <a href="#" class="card-link" @click.prevent="handleDetailsClick">
      More details
      <span class="card-arrow">→</span>
    </a>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  cardData: {
    type: Object,
    required: true,
  },
  showButton: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['details-click']);

const handleDetailsClick = () => {
  alert('Details clicked!'); 
  emit('details-click');   
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-card.scss';
</style>  
