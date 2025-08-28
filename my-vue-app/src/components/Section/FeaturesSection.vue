<script setup>
import { productFeaturesCards } from '../../models/ProductFeatures.js';
import FeaturesCard from '../FeaturesCard.vue';
</script>

<template>
  <section class="features-section">
    <div class="features-section__content">
      <h2 class="features-section__title title">
        Redmine plugins
      </h2>
      <p class="features-section__description description">
        Extend the capabilities of Redmine
        with our collection of
        powerful plugins.
      </p>
      <div class="features-section__cards-wrapper">
        <FeaturesCard
          v-for="card in productFeaturesCards"
          :key="card.title"
          :card-data="card"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/section/features-section.scss';
</style>
