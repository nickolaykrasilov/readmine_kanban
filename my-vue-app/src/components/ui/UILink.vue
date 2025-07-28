<script setup>
import {  THEME_VALIDATOR } from '../../models/UIThemes';
import { ICON_POSITIONS, ICON_POSITION_VALIDATOR } from '../../models/UIIconPositions';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: undefined, 
    validator: THEME_VALIDATOR,
  },
  label: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: ICON_POSITIONS.RIGHT,
    validator: ICON_POSITION_VALIDATOR,
  },
});
</script>

<template>
  <a
    :href="to"
    :class="[
      'ui-link',
      theme ? `ui-link--${theme}` : '', 
    ]"
  >
    <template v-if="$slots.label">
      <slot name="label" />
    </template>
    <template v-else>
      {{ label }}
    </template>
    <span v-if="$slots.icon && iconPosition === ICON_POSITIONS.RIGHT">
      <slot name="icon" />
    </span>
  </a>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
