<script setup>
import { ref } from 'vue';

import UIButton from '../ui/UIButton.vue';
import UILink from '../ui/UILink.vue';
import HeaderNav from './HeaderNav.vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';

import { useScreenSize } from '../../utils/screen.js';
import { NavigationMenuModel } from '../../models/NavigationMenuModel.js';

const { isMobile } = useScreenSize();
const navigationModel = new NavigationMenuModel();
const navItems = navigationModel.getNavItems();

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

const handleItemSelected = () => {
  if (isMobile.value) {
    closeMenu();
  }
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__brand">
        <LogoIcon class="header__logo-icon" />
        <span class="header__logo">
          Redmine
          <span class="header__logo-part">
            Kanban
          </span>
        </span>
      </div>
      <button
        v-if="isMobile"
        class="header__mobile-menu-button"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span class="header__mobile-menu-icon"></span>
      </button>
      <div
        class="header__menu"
        :class="{ 'header__menu--active': isMenuOpen || !isMobile }"
      >
        <HeaderNav
          :dropdowns="navItems.dropdowns"
          :links="navItems.links"
          @item-selected="handleItemSelected"
        />
        <div class="header__actions">
          <LanguageSwitcher />
          <UILink
            href="/login"
            label="Login"
            theme="blue"
          >
            <template #icon>
              <UserIcon />
            </template>
          </UILink>
          <UIButton label="Get a Free Demo" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
