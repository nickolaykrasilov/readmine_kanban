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

const isMobileMenuOpen = ref(false);

const handleItemSelected = ({ type, item }) => {
  navigationModel.updateCurrent(type, item);
};
</script>

<template>
  <header class="header">
    <div class="header__container">
        <LogoIcon />
        <span class="header__logo">
          Redmine
          <span class="header__logo-part">Kanban</span>
        </span>
      <button
        v-if="isMobile"
        class="header__mobile-menu-button"
        aria-label="Toggle menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span class="header__mobile-menu-icon" />
      </button>
      <div
        :class="[
          'header__controls',
          { 'header__controls--active': isMobileMenuOpen },
        ]"
      >
        <HeaderNav
          :dropdowns="navItems.dropdowns"
          @item-selected="handleItemSelected"
        />
        <UILink
          v-for="(link, key) in navItems.links"
          :key="key"
          :href="link.href"
          :label="link.text"
        />
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
        <UIButton
          label="Get a Free Demo"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
