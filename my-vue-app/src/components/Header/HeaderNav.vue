<script setup>
import DropdownMenu from './DropdownMenu.vue';
import UILink from '../ui/UILink.vue'; 

const props = defineProps({
  dropdowns: {
    type: Object,
    required: true,
  },
  onSelectItem: {
    type: Function,
    required: true,
  }
});

const handleSelect = (type, value) => {
  props.onSelectItem({ type, value });
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
      :onSelect="(value) => handleSelect(type, value)" 
    />
    <UILink 
      to="/resources" 
      text="Resources" 
      plain 
    />
  </nav>
</template>

<style lang="scss">
</style>