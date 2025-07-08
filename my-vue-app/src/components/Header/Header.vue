<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import DemoButton from '../DemoButton.vue';
import HeaderNav from './HeaderNav.vue';
import DropdownMenu from './DropdownMenu.vue';
import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/icons/people.svg';
import dropdownArrow from '../../assets/icons/check_mark.svg';

// Reactive state
const isMobileMenuOpen = ref(false);
const activeDropdown = ref(null);
const isMobile = ref(false);
// Selected values
const selected = {
  plugin: ref('Plugins'),
  theme: ref('Themes'),
  pricing: ref('Pricing'),
  language: ref('En')
};
// Dropdown configuration
const dropdowns = {
  plugin: {
    items: ['Plugin 1', 'Plugin 2'],
    selected: selected.plugin
  },
  theme: {
    items: ['Theme 1', 'Theme 2'],
    selected: selected.theme
  },
  pricing: {
    items: ['Basic', 'Pro'],
    selected: selected.pricing
  },
  language: {
    items: ['En', 'Ru'],
    selected: selected.language
  }
};
// Methods
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};
const toggleDropdown = (dropdownName) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName;
};
const closeDropdowns = () => {
  activeDropdown.value = null;
};
const selectItem = ({ type, value }) => {
  if (dropdowns[type]) {
    dropdowns[type].selected.value = value;
    setTimeout(closeDropdowns, 100);
  }
};
const handleDocumentClick = (e) => {
  if (!e.target.closest('.header__dropdown')) {
    closeDropdowns();
  }
};
// Lifecycle hooks
onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  document.addEventListener('click', handleDocumentClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
  document.removeEventListener('click', handleDocumentClick);
});
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="logo" alt="Company Logo" class="header__logo-img">
      </div>
      <button
        v-if="isMobile"
        class="header__mobile-menu-button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span class="header__mobile-menu-icon" />
      </button>
      <HeaderNav
        :is-mobile="isMobile"
        :dropdowns="dropdowns"
        :active-dropdown="activeDropdown"
        @update:active-dropdown="toggleDropdown"
        @select-item="selectItem"
        :class="{ 'header__nav--active': isMobileMenuOpen }"
      />
      <div class="header__controls" :class="{ 'header__controls--active': isMobileMenuOpen }">
        <a href="#" class="header__nav-link">Support</a>
        <DropdownMenu
          :items="dropdowns.language.items"
          :selected-value="dropdowns.language.selected.value"
          :is-open="activeDropdown === 'language'"
          @update:is-open="(isOpen) => isOpen ? toggleDropdown('language') : closeDropdowns()"
          @select="(value) => selectItem({ type: 'language', value })"
        />
        <a href="#" class="header__login-link">
          <span class="header__login-text">Login</span>
          <img :src="userIcon" alt="User icon" class="header__login-icon">
        </a>
        <DemoButton class="header__demo-btn" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/Header.scss';
</style>
