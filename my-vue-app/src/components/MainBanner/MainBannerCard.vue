<script setup>
import { defineProps, defineEmits } from 'vue';
import { iconComponents } from '../../models/CardsData.js';

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

<template>
  <div class="card">
    <div class="icons"> 
      <component
        :is="iconComponents[cardData.iconType]"
      />
    </div>
    <h3 class="card-title">
      {{ cardData.title }}
    </h3>    
    <p class="card-subtitle">
      {{ cardData.description }}
    </p>
    <a 
      href="#" 
      class="card-link" 
      @click.prevent="handleDetailsClick"
    >
      More details
      <ArrowIcon /> 
    </a>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/main-banner/main-banner-card.scss';
</style>
