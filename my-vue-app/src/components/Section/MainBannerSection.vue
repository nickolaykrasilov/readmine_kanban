<script setup>
import UIButton from '../ui/UIButton.vue';
</script>

<template>
  <section class="main-banner-section">
    <div class="main-banner-section__content">
      <img
        src="../../assets/images/ellipse.png"
        class="main-banner-section__ellipse-top"
      />
      <h1 class="main-banner-section__title title">
        Powerful Agile & Kanban
        solutions for Redmine
      </h1>
      <div class="main-banner-section__text-block">
        <p class="main-banner-section__description description">
          Our plugins will help you stay organized and
          ensure that all necessary tasks are completed
          throughout the project lifecycle.
        </p>
        <UIButton 
          label="Get a Free Demo"
          class="main-banner-section__button"
        >
          <template #icon>
            <whiteArrowIcon />
          </template>
        </UIButton>
      </div>
      <img
        src="../../assets/images/screen.jpg"
        alt="Redmine Kanban Screen"
        class="main-banner-section__screen"
      />
    </div> 
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/section/main-banner-section';
</style>
