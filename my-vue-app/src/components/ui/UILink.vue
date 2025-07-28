<script setup>
import { THEME_VALIDATOR } from '../../models/UIThemes';

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
    <span v-if="$slots.icon">
      <slot name="icon" />
    </span>
  </a>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
