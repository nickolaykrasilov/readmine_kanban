<script setup>
import { computed } from 'vue';
import dropdownArrow from '../../assets/icons/check_mark.svg';

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

const handleToggle = (type) => {
  emit('update:activeDropdown', type);
};

const handleSelect = (type, value) => {
  emit('selectItem', { type, value });
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
        @click.stop="handleToggle(type)"
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
          @click.stop="handleSelect(type, item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <a href="#" class="header__nav-link">Resources</a>
  </nav>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/Header.scss';
</style>