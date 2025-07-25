<script setup>
import { UI_THEMES, THEME_VALIDATOR } from '../../models/UIThemes'
import { ICON_POSITIONS, ICON_POSITION_VALIDATOR } from '../../models/UIIconPositions';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: UI_THEMES.BLUE,
    validator: THEME_VALIDATOR
  },
  text: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: ICON_POSITIONS.RIGHT,
    validator: ICON_POSITION_VALIDATOR
  },
});
</script>

<template>
  <a
    :href="to"  
    :class="[
      'ui-link',
      `ui-link--${theme}`,
    ]"
  >
    <span
      v-if="$slots.icon && iconPosition === ICON_POSITIONS.LEFT" 
      class="ui-link__icon ui-link__icon--left"
    >
      <slot name="icon" />
    </span>
    
    <template v-if="$slots.text">
      <slot name="text" />
    </template>
    <template v-else>
      {{ text }}
    </template>
    
    <span
      v-if="$slots.icon && iconPosition === ICON_POSITIONS.RIGHT" 
      class="ui-link__icon ui-link__icon--right"
    >
      <slot name="icon" />
    </span>
  </a>
</template>

<style lang="scss">
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
  