<script setup>
import { LOGO_SIZES } from '../models/LogoSizes';
import { UI_THEMES } from '../models/UIThemes';

defineProps({
  size: {
    type: String,
    default: LOGO_SIZES.MD,
  },
  color: {
    type: String,
    default: UI_THEMES.BLUE,
    validator: (value) => Object.values(UI_THEMES).includes(value),
  },
});
</script>

<template>
  <div 
    class="logo"
    :class="`logo--${color}`"
  >
    <logoIcon :size="size" />
    <span class="logo__text">
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
