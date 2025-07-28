<script setup>
import DropdownMenu from './DropdownMenu.vue';

defineProps({
  dropdowns: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['select-item']);

const handleSelect = (type, value) => {
  emit('select-item', { type, value });
};
</script>

<template>
  <nav class="header__nav">
    <DropdownMenu
      v-for="(config, type) in dropdowns"
      :key="type"
      :type="type"
      :items="config.items"
      :selected-value="config.selected.value"
      @select="(value) => handleSelect(type, value)"
    />
  </nav>
</template>
