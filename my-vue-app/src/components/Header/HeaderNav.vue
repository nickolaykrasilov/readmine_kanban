<script setup>
import { ref, computed } from 'vue';
import NavLink from './NavLink.vue';
import dropdownArrow from '../../assets/icons/check_mark.svg';

const props = defineProps({
  isMobile: Boolean,
  dropdowns: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['select-item', 'toggle-dropdown']);

const activeDropdown = defineModel('activeDropdown');

const visibleDropdowns = computed(() => {
  const { language, ...rest } = props.dropdowns;
  return rest;
});

const selectItem = (type, value) => {
  emit('select-item', { type, value });
};

const toggleDropdown = (dropdownName) => {
  emit('toggle-dropdown', dropdownName);
};
</script>

<template>
  <nav class="header__nav">
    <div
      v-for="(config, type) in visibleDropdowns"
      :key="type"
      class="header__dropdown"
    >
      <button
        class="header__dropdown-button"
        @click="toggleDropdown(type)"
        aria-haspopup="true"
        :aria-expanded="activeDropdown === type"
      >
        {{ config.selected.value }}
        <span class="header__dropdown-arrow">
          <img :src="dropdownArrow" alt="Dropdown arrow" class="dropdown-arrow-icon">
        </span>
      </button>

      <ul class="header__dropdown-list" v-show="activeDropdown === type">
        <li
          v-for="item in config.items"
          :key="item"
          class="header__dropdown-item"
          @click.stop="selectItem(type, item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <NavLink :mobile="isMobile" href="#">
      Resources
    </NavLink>
  </nav>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/Header.scss';
</style>