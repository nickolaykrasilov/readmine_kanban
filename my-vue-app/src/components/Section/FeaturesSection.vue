<script setup>
import { featureCards } from '../../models/ProductFeatures.js';
import MainBannerCard from '../MainBanner/MainBannerCard.vue';
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
        <MainBannerCard
          v-for="card in featureCards"
          :key="card.title"
          :card-data="card"
        />
      </div>
      <img
        src="../../assets/images/ellipse.png"
        class="features-section__ellipse-top"
      />
      <img
        src="../../assets/images/ellipse.png"
        class="features-section__ellipse-down"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/section/features-section.scss';
</style>