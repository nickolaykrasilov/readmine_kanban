<script setup>
import UIButton from '../ui/UIButton.vue';
</script>

<template>
  <section class="main-banner">
    <div class="main-banner__content">
      <img
        src="../../assets/images/ellipse.png"
        class="main-banner__ellipse-top"
      />
      <h1 class="main-banner__title title">
        Powerful Agile & Kanban
        solutions for Redmine
      </h1>
      <div class="main-banner__text-block">
        <p class="main-banner__description description">
          Our plugins will help you stay organized and
          ensure that all necessary tasks are completed
          throughout the project lifecycle.
        </p>
        <UIButton 
          label="Get a Free Demo"
          class="main-banner__button"
        >
          <template #icon>
            <whiteArrowIcon />
          </template>
        </UIButton>
      </div>
      <img
        src="../../assets/images/screen.jpg"
        alt="Redmine Kanban Screen"
        class="main-banner__screen"
      />
    </div> 
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/section/main-banner.scss';
</style>