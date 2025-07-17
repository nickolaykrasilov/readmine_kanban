<script setup>
import UIButton from './ui/UIButton.vue';
</script>

<template>
  <section class="main-banner">
    <div class="main-banner__container">
      <div class="main-banner__content">
        <img
          src="../assets/images/ellipse.png"
          alt="Decorative ellipse"
          class="main-banner__ellipse"
        >
        <div class="title">
              Powerful Agile & Kanban solutions for Redmine
        </div>
        <div class="main-banner__text-block">
          <p class="main-banner__subtitle">
            Our plugins will help you stay organized and 
            ensure that all necessary tasks are completed 
            throughout the project lifecycle.
          </p>
          <div class="main-banner__button-wrapper">
            <UIButton
              class="main-banner__button"
            >
              Get a Free Demo
              <template #icon>
                <span class="main-banner__button-rect">
                  <svg 
                    width="15" 
                    height="12" 
                    viewBox="0 0 15 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    class="main-banner__button-arrow"
                  >
                    <path 
                      d="M1 5.25C0.585786 
                      5.25 0.25 5.58579 0.25 
                      6C0.25 6.41421 0.585786 6.75 1 
                      6.75L1 5.25ZM14.5303 6.53033C14.8232 
                      6.23744 14.8232 5.76256 14.5303 
                      5.46967L9.75736 0.6967C9.46447 
                      0.403806 8.98959 0.403806 8.6967 
                      0.6967C8.40381 0.989593 8.40381 
                      1.46447 8.6967 1.75736L12.9393 6L8.6967 
                      10.2426C8.40381 10.5355 8.40381 11.0104 
                      8.6967 11.3033C8.98959 11.5962 9.46447 
                      11.5962 9.75736 11.3033L14.5303 
                      6.53033ZM1 6.75L14 6.75L14 
                      5.25L1 5.25L1 6.75Z" 
                      fill="white"
                    />
                  </svg>
                </span>
              </template>
            </UIButton>
          </div>
        </div>
        <img
          src="../assets/images/screen.jpg"
          alt="Redmine Kanban Screen"
          class="main-banner__screen"
        >
        <div class="title"> 
          <div class="main-banner__h2title">
            Redmine plugins
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/components/main-banner.scss';
</style>
