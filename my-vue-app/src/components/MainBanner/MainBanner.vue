<script setup>
import MainBannerCard from './MainBannerCard.vue';
import UIButton from '../ui/UIButton.vue';
import { cards } from '../../models/CardsData.js';
</script>

<template>
  <section class="main-banner">
      <div class="main-banner__content">
        <img
          src="../../assets/images/ellipse.png"
          alt="Decorative ellipse"
          class="main-banner__ellipse"
        >
        <div class="title">
            Powerful Agile & Kanban solutions for Redmine
        </div>
        <div class="main-banner__text-block">
            <p class="main-banner__subtitle">
              <div class="subtitle">
              Our plugins will help you stay organized and 
              ensure that all necessary tasks are completed 
              throughout the project lifecycle.
              </div>
            </p>
            <UIButton 
              label="Get a Free Demo"
              class="main-banner__button"
              >
              <template #icon>
                <span class="main-banner__button-rect">
                  <WhiteArrowIcon class="main-banner__button-arrow" />
                </span>
              </template>
            </UIButton>
        </div>
        <img
          src="../../assets/images/screen.jpg"
          alt="Redmine Kanban Screen"
          class="main-banner__screen"
        >
        <div class="title"> 
          <div class="main-banner__title">
            Redmine plugins
          </div>
        </div>
          <div class="subtitle">
            <p class="main-banner__subtitle">
              Extend the capabilities of Redmine 
              with our collection of 
              powerful plugins . 
            </p>
          </div>  
              <div class="cards-wrapper">
                <MainBannerCard
                    v-for="card in cards"
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
