<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useScreenSize } from '../../utils/screen';
import { NavigationMenuModel } from '../../models/NavigationMenuModel';
import UIButton from '../ui/UIButton.vue';
import UILink from '../ui/UILink.vue';
import HeaderNav from './HeaderNav.vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';
import logo from '../../assets/images/logo.png';

const router = useRouter();
const { isMobile } = useScreenSize();
const navigationModel = new NavigationMenuModel();

const isMobileMenuOpen = ref(false);
const activeDropdown = ref(null);
const dropdowns = navigationModel.getDropdowns();

const toggleDropdown = (dropdownName) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName
};

const selectItem = ({ type, value }) => {
  dropdowns[type].selected.value = value
  router.push(navigationModel.getRoute(type, value))
};  
</script>

<template>
  <header class="header">
    <div class="header__container">
      <UILink
        to="/"
        class="header__logo"
      >
        <img
          :src="logo"
          alt="Company Logo"
          class="header__logo-img"
        >
      </UILink>
      <button
        v-if="isMobile"
        class="header__mobile-menu-button"
        aria-label="Toggle menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span class="header__mobile-menu-icon" />
      </button>
      <HeaderNav
        :is-mobile="isMobile"
        :dropdowns="dropdowns"
        :active-dropdown="activeDropdown"
        :class="{ 'header__nav--active': isMobileMenuOpen }"
        @update:active-dropdown="toggleDropdown"
        @select-item="selectItem"
      />
      <div
        class="header__controls"
        :class="{ 'header__controls--active': isMobileMenuOpen }"
      >
        <UILink
          to="/support"
          variant="text"
          text="Support"
          class="header__nav-link"
        />
        <LanguageSwitcher />
        <UILink
          to="/login"
          variant="text"
          text="Login"
          class="header__login-link"
        />
        <UserIcon/>

        
        <UIButton
          label="Get Demo"
          class="header__demo-button"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
