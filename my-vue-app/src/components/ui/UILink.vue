<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },  
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'danger', 'accent'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
  iconLeft: {
    type: [String, Object],
    default: null,
  },
  iconRight: {
    type: [String, Object],
    default: null,
  },
});
</script>

<template>
  <router-link
    :to="to"
    :class="[
      'ui-link',
      `ui-link--${variant}`,
      { 'is-disabled': disabled }
    ]"
    :aria-disabled="disabled"
  >
    <slot 
    v-if="$slots.iconLeft" 
    name="iconLeft" 
    />
    <component
      v-else-if="typeof iconLeft === 'object'"
      :is="iconLeft"
      class="ui-link__icon-left"
    />
    <img
      v-else-if="iconLeft"
      :src="iconLeft"
      alt=""
      class="ui-link__icon-left"
    >
    <span class="ui-link__text">
      <slot>
        {{ text }}
      </slot>
    </span>
    <slot 
    v-if="$slots.iconRight" 
    name="iconRight" 
    />
    <component
      v-else-if="typeof iconRight === 'object'"
      :is="iconRight"
      class="ui-link__icon-right"
    />
    <img
      v-else-if="iconRight"
      :src="iconRight"
      alt=""
      class="ui-link__icon-right"
    >
  </router-link>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
