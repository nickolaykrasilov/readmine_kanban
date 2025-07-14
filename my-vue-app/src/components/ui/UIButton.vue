<script setup>
defineProps({
  label: {
    type: String,
    default: 'Get a Free Demo',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconLeft: {
    type: String,
    default: null,
  },
  iconRight: {
    type: String,
    default: null,
  }
});
</script>

<template>
  <button
    class="ui-button"
    :class="{ 'is-disabled': disabled }"
    :disabled="disabled"
  >
    <span 
    v-if="iconLeft" 
    class="ui-button__icon ui-button__icon--left"
    >
      <img 
      :src="iconLeft" 
      alt="" 
      aria-hidden="true" />
    </span>
    <span class="ui-button__text">
      {{ label }}
    </span>
    <span 
    v-if="iconRight" 
    class="ui-button__icon ui-button__icon--right"
    >
      <img 
      :src="iconRight" 
      alt="" 
      aria-hidden="true" 
      />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-button.scss';
</style>
