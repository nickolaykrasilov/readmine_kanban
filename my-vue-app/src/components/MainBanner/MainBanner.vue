<script setup>
import MainBannerCard from './MainBannerCard.vue';
import UIButton from '../ui/UIButton.vue';
import { featureCards } from '../../models/ProductFeatures.js';
</script>

<template>
  <section class="main-banner">
    <div class="main-banner__content">
      <img
        src="../../assets/images/ellipse.png"
        alt="Decorative ellipse"
        class="main-banner__ellipse"
      />
      <h1 class="title main-banner__title">
        Powerful Agile & Kanban 
        solutions for Redmine
      </h1>
      <div class="main-banner__text-block">
        <p class="description main-banner__description">
          Our plugins will help you stay organized and 
          ensure that all necessary tasks are completed 
          throughout the project lifecycle.
        </p>
        <UIButton 
          label="Get a Free Demo"
          class="main-banner__button"
        >
          <template #icon>
            <WhiteArrowIcon />
          </template>
        </UIButton>
      </div>
      <img
        src="../../assets/images/screen.jpg"
        alt="Redmine Kanban Screen"
        class="main-banner__screen"
      />
      <h2 class="title main-banner__secondary-title"> 
        Redmine plugins
      </h2>
      <p class="description main-banner__description">
        Extend the capabilities of Redmine 
        with our collection of 
        powerful plugins . 
      </p>
      <div class="main-banner__cards-wrapper">
        <MainBannerCard
          v-for="card in featureCards"
          :key="card.title"
          :card-data="card"
        />
      </div>
    </div> 
  </section>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/main-banner/main-banner.scss';
</style>
