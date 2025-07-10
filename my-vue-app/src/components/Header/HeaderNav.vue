<script setup>
import { computed } from 'vue';
import DropdownMenu from './DropdownMenu.vue';

const props = defineProps({
  isMobile: Boolean,
  dropdowns: {
    type: Object,
    required: true
  },
  activeDropdown: String
});

const emit = defineEmits(['update:activeDropdown', 'selectItem']);

const visibleDropdowns = computed(() => {
  const { language, ...rest } = props.dropdowns;
  return rest;
});
const toggleDropdown = (type) => {
  emit('update:activeDropdown', props.activeDropdown === type ? null : type);
};
</script>

<template>
  <nav class="header__nav">
    <DropdownMenu
      v-for="(config, type) in visibleDropdowns"
      :key="type"
      :items="config.items"
      :selected-value="config.selected.value"
      :is-open="activeDropdown === type"
      @update:is-open="(isOpen) => isOpen ? toggleDropdown(type) : emit('update:activeDropdown', null)"
      @select="(value) => emit('selectItem', { type, value })"
    />
    <a href="#" class="header__nav-link">Resources</a>
  </nav>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
