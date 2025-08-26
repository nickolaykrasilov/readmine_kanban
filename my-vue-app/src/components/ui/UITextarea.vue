<script setup>
import { defineProps, defineModel } from 'vue';

defineProps({
  placeholder: {
    type: String,
    default: '',
  },
});

const modelValue = defineModel();
</script>

<template>
  <textarea
    v-model="modelValue"
    :placeholder="placeholder"
    class="footer-form__textarea"
  />
</template>
