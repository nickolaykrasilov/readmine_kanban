<script setup>
import { UI_THEMES } from '../../models/UIThemes';

defineProps({
  to: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: UI_THEMES.BLACK,
    validator: (value) => Object.values(UI_THEMES).includes(value),
  },
  label: {
    type: String,
    default: '',
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
    <template v-if="$slots.label">
      <slot name="label" />
    </template>
    <template v-else>
      {{ label }}
    </template>
    <span v-if="$slots.icon">
      <slot name="icon" />
    </span>
  </a>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
