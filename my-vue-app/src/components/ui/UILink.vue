<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: null,
  },
  iconAlt: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'default', 
    validator: (value) => ['default', 'primary', 'danger', 'login'].includes(value),
  },
});
</script>

<template>
  <router-link
    :to="to"
    :class="[
      'ui-link',
      `ui-link--${variant}`,
    ]"
  >
    <span class="ui-link__text">
      {{ text }}
    </span>
    <img
      v-if="icon"
      :src="icon"
      :alt="iconAlt"
      class="ui-link__icon"
    >
  </router-link>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
