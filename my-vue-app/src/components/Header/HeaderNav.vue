<script setup>
import DropdownMenu from './DropdownMenu.vue';

defineProps({
  dropdowns: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['item-selected']);

const handleItemSelected = (type, item) => {
  emit('item-selected', { type, item });
};
</script>

<template>
  <nav class="header__nav">
    <DropdownMenu
      v-for="(config, type) in dropdowns"
      :key="type"
      :type="type"
      :items="config.items"
      :current-item="config.current.value"
      @item-selected="(item) => handleItemSelected(type, item)"
    />
  </nav>
</template>