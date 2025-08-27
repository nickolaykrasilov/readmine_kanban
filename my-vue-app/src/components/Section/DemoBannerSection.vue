<script setup>
import UIBanner from '../ui/UIBanner.vue';
</script>

<template>
  <section class="demo-banner-section">
    <UIBanner
      title="Demo"
      description="Check out all the features of our plugins in the demo"
      button-label="Get a Free Demo"
      class="demo-banner-section__banner"
    >
      <template #left-image>
        <img
          src="../../assets/images/head.png"
          alt="Left decoration"
        />
      </template>
      <template #right-image>
        <img 
          src="../../assets/images/cloud.png"
          alt="Right decoration"
        />
      </template>
    </UIBanner>
  </section>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/section/demo-banner-section.scss';
</style>