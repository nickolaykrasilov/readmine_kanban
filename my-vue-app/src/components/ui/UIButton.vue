<script setup>
defineProps({
  label: {
    type: String,
    default: 'Get a Free Demo'
  },
  disabled: {
    type: Boolean,
    default: false
  }
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
  </button>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-button.scss';
</style>
