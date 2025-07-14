<script setup>
import { validateButtonTypes } from '../../models/ButtonTypes'; 

defineProps({
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  iconRight: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'button',
    validator: validateButtonTypes, 
  },
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  alert('Вы кликнули на кнопку!');
  emit('click', event);
};
</script>

<template>
  <button
    class="ui-button"
    :class="{ 'is-disabled': disabled, 'has-icon-right': iconRight }"
    :type="type"
    :disabled="disabled"
    @click="handleClick"
  >
    <span class="ui-button__text">
      <slot>{{ label }}</slot>
    </span>
    <span 
      v-if="iconRight" 
        class="ui-button__icon ui-button__icon--right"
    >
      <img 
        :src="iconRight" 
        alt="" 
        aria-hidden="true" 
      />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-button.scss';
</style>
