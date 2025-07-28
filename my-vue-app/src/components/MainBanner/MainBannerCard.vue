<script setup>
import { defineProps } from 'vue';
import { iconComponents } from '../../models/ProductFeatures.js';
import UILink from '../ui/UILink.vue';

defineProps({
  cardData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card">
    <div class="card__icons"> 
      <component :is="iconComponents[cardData.iconType]" />
    </div>
    <h3 class="card__title">
      {{ cardData.title }}
    </h3>    
    <p class="card__description">
      {{ cardData.description }}
    </p>
    <UILink 
      to="/details"
      label="More details"
      theme="blue"
      class="card__link"
    >
      <template #icon>
        <ArrowIcon />
      </template>
    </UILink>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/main-banner/main-banner-card.scss';
</style>
