<script setup>
defineProps({
  buttonText: {
    type: String,
    default: 'Get a Free Demo',
  }
});
</script>

<template>
  <button class="ui-button">
    <span class="ui-button__text">
      {{ buttonText }}
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-button.scss';
</style>
