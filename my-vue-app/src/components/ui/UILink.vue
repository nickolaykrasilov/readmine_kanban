<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    default: 'blue',
    validator: (value) => {
      return ['blue', 'green', 'red', 'gray', 'yellow', 'purple'].includes(value)
    }
  },
  text: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right'].includes(value)
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
      v-if="$slots.icon && iconPosition === 'left'" 
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
      v-if="$slots.icon && iconPosition === 'right'" 
      class="ui-link__icon ui-link__icon--right"
    >
      <slot name="icon" />
    </span>
  </a>
</template>

<style lang="scss">
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
  