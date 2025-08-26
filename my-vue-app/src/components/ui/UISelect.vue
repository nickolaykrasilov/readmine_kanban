<script setup>
import { defineProps, defineModel, useAttrs } from 'vue';

defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
});

const modelValue = defineModel();
const attrs = useAttrs();
</script>

<template>
  <div class="footer__form-select">
    <select
      v-model="modelValue"
      v-bind="attrs"
    >
      <option value="" disabled>
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <triangleIcon class="footer__form-select-icon" />
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/footer/footer-form.scss';
</style>
