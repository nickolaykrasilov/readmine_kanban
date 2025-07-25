<script setup>
import { ref } from 'vue';

import { useScreenSize } from '../../utils/screen.js';
import { NavigationMenuModel } from '../../models/NavigationMenuModel.js';

import UIButton from '../ui/UIButton.vue';
import UILink from '../ui/UILink.vue';
import HeaderNav from './HeaderNav.vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';

import logo from '../../assets/images/logo.png';

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
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <a
        to="/"
        class="header__logo"
      >
        <img
          :src="logo"
          alt="Header Logo"
          class="header__logo-img"
        >
       </a>
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
          to="/resources" 
          label="Resources" 
          theme="black"
        />
        <UILink
          to="/support"
          label="Support"
          theme="black"
        />
        <LanguageSwitcher />
        <UILink
          to="/login"
          label="Login"
          theme="blue"
        >
          <template #icon>
            <UserIcon class="header__login-icon" />
          </template>
        </UILink>
        <UIButton
          label="Get a Free Demo"
          theme="color_blue_and_white"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
