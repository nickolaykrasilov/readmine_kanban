<script setup>

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: 'blue',
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
      <template v-if="$slots.text">
        <slot name="text" />
      </template>
      <template v-else>
        {{ text }}
      </template>
      <span
        v-if="$slots.icon && iconPosition === 'right'" 
        class="ui-link__icon"
      >
        <slot name="icon" />
    </span>
  </a>
</template>

<style lang="scss">
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
  