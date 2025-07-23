<script setup>
import DropdownMenu from './DropdownMenu.vue';

const props = defineProps({
  dropdowns: {
    type: Object,
    required: true,
  },
  onSelectItem: { // Функция-колбэк из родителя
    type: Function,
    required: true,
  }
});

const handleSelect = (type, value) => {
  props.onSelectItem({ type, value }); // Вызов колбэка
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
    <a
      href="/resources" 
      class="header__nav-link"
    >
      Resources
  </a>
  </nav>
</template>

<style lang="scss">
.header__nav {
  display: flex;
  align-items: center;

  &-link {
    text-decoration: none; 
  }
}
</style>
