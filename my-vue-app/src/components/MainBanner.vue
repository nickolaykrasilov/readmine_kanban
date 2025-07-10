<template>
  <section class="main-banner">
    <div class="main-banner__container">
      <div class="main-banner__content">
        <img 
          src="../assets/images/Ellipse.png" 
          alt="Decorative ellipse" 
          class="main-banner__ellipse"
        />
        <h1 class="main-banner__title">
          Powerful Agile & Kanban solutions for Redmine
        </h1>
        <div class="main-banner__text-block">
          <p class="main-banner__subtitle">
            Our plugins will help you stay organized and 
            ensure that all necessary tasks are completed 
            throughout the project lifecycle.
          </p>
          <button class="main-banner__btn">
            <span class="main-banner__btn-text">
              Get a Free Demo
            </span>
            <span class="main-banner__btn-rect">
              <img 
                src="../assets/icons/Arrow.svg" 
                alt="Arrow icon"
                class="main-banner__btn-arrow"
              />
            </span>
          </button>
        </div>
        <img
          src="../assets/images/screen.jpg"
          alt="Redmine Kanban Screen"
          class="main-banner__screen"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/styles/components/main-banner.scss';
</style>
