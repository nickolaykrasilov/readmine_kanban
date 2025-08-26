<script setup>
import { LOGO_SIZES } from '../models/LogoSizes';

defineProps({
  size: {
    type: String,
    default: LOGO_SIZES.MD,
  },
  color: {
    type: String,
    default: 'blue',
  },
});
</script>

<template>
  <div class="logo">
    <logoIcon :size="size" />
    <span
      class="logo__text"
      :class="`logo__text--${color}`"
    >
      Redmine
      <span class="logo__text-part">
        Kanban
      </span>
    </span>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/components/logo.scss';
</style>
