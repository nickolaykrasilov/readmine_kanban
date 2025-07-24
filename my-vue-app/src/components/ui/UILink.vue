<script setup>
import { LINK_VARIANTS } from '../../models/LinkVariants';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: 'default',
    validator: (value) => LINK_VARIANTS.includes(value),
  },
  text: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'right',
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
      <span class="ui-link__text">
        <slot>
          {{ text }}
        </slot>
      </span>
      <span
        v-if="$slots.icon && iconPosition === 'right'" 
        class="ui-link__icon"
      >
        <slot name="icon" />
    </span>
  </a>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-link.scss';
</style>