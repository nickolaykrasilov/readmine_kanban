<script setup>
import { computed } from 'vue';
import { LINK_VARIANTS } from '../../models/LinkVariants';

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => LINK_VARIANTS.includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: 'right',
  },
});

const isExternalLink = computed(() => {
  return props.to.startsWith('http://') || 
         props.to.startsWith('https://') || 
         props.to.startsWith('/');
});
</script>

<template>
  <component
    :is="isExternalLink ? 'a' : 'router-link'"
    :href="isExternalLink ? to : undefined"
    :to="isExternalLink ? undefined : to"
    :class="[
      'ui-link',
      `ui-link--${variant}`,
      { 
        'is-disabled': disabled,
        'ui-link--plain': plain,
        'ui-link--icon-right': iconPosition === 'right',
      }
    ]"
    :aria-disabled="disabled"
  >
    <span class="ui-link__content">
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
    </span>
  </component>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
