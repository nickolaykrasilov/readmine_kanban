<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import UiButton from '../ui/UiButton.vue';
import HeaderNav from './HeaderNav.vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';
import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/images/icons/people.svg';

const router = useRouter();

// Reactive state
const isMobileMenuOpen = ref(false);
const activeDropdown = ref(null);
const isMobile = ref(false);

// Dropdown configuration
const dropdowns = {
  plugin: {
    items: ['Plugin 1', 'Plugin 2'],
    selected: ref('Plugins'),
  },
  theme: {
    items: ['Theme 1', 'Theme 2'],
    selected: ref('Themes'),
  },
  pricing: {
    items: ['Basic', 'Pro'],
    selected: ref('Pricing')
  }
};

// Methods
const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768;
};

const toggleDropdown = (dropdownName) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName;
};

const selectItem = ({ type, value }) => {
  dropdowns[type].selected.value = value;
  const routeMap = {
    plugin: {
      'Plugin 1': '/plugins/plugin1',
      'Plugin 2': '/plugins/plugin2'
    },
    theme: {
      'Theme 1': '/themes/theme1',
      'Theme 2': '/themes/theme2'
    },
    pricing: {
      'Basic': '/pricing/basic',
      'Pro': '/pricing/pro'
    }
  };
  router.push(routeMap[type]?.[value] || '/');
};

const handleDocumentClick = (e) => {
  if (!e.target.closest('.header__dropdown')) {
    activeDropdown.value = null;
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
        <img 
        :src="logo" 
        alt="Company Logo" 
        class="header__logo-img"
        >
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
        <router-link to="/support" class="header__nav-link">
          Support
        </router-link>
        <LanguageSwitcher />
        <router-link to="/login" class="header__login-link">
          <span class="header__login-text">
            Login
          </span>
          <img 
          :src="userIcon" 
          alt="User icon" 
          class="header__login-icon"
          >
        </router-link>
        <UiButton class="header__demo-btn" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/header/header.scss';
</style>
