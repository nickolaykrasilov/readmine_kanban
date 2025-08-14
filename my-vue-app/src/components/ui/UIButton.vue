<script setup>
import { UI_THEMES } from '../../models/UIThemes';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: UI_THEMES.BLUE,
    validator: (value) => Object.values(UI_THEMES).includes(value),
  },
  iconRight: {
    type: Boolean,
    default: false,
  },
});

const handleClick = () => {
  if (!props.disabled) {
    alert("Click :) Have a nice day!");
  };
};
</script>

<template>
  <button
    :class="[
      'ui-button',
      `ui-button--${theme}`,
      { 
        'ui-button--disabled': disabled,
        'ui-button--icon': $slots.icon,
        'ui-button--icon-right': iconRight && $slots.icon,
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <template v-if="label">
      {{ label }}
    </template>
    <slot v-else />
    <span
      v-if="$slots.icon"
      :class="[
        `ui-button__icon`,
        { 'ui-button__icon--right': iconRight }
      ]"
    >
      <slot name="icon" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/ui/ui-button.scss';
</style>
