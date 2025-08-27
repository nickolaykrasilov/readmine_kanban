<script setup>
import { defineProps, defineModel } from 'vue';

defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
});

const modelValue = defineModel();
</script>

<template>
  <input
    v-model="modelValue"
    :type="type"
    :placeholder="placeholder"
  />
</template>
