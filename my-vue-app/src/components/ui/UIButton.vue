<script setup>
defineProps({
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconRight: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <button
    class="ui-button"
    :class="{ 'is-disabled': disabled }"
    :disabled="disabled"
  >
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
