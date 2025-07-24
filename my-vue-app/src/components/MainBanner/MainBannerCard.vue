<script setup>
import { defineProps } from 'vue';
import { iconComponents } from '../../models/CardsData.js';

import UILink from '../ui/UILink.vue';

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

const handleDetailsClick = () => {
  alert('Details clicked!'); 
};
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
        theme="default"
        text="More details"
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