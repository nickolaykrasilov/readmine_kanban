<script setup>
import { defineProps, defineModel } from 'vue';

defineProps({
  placeholder: String,
});

const modelValue = defineModel();
</script>

<template>
  <textarea
    v-model="modelValue"
    :placeholder="placeholder"
    class="footer__form-textarea"
  />
</template>
