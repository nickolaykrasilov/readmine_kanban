<script setup>
import { ref } from 'vue';

import { useScreenSize } from '../../utils/screen.js';
import { NavigationMenuModel } from '../../models/NavigationMenuModel.js';

import UIButton from '../ui/UIButton.vue';
import UILink from '../ui/UILink.vue';
import HeaderNav from './HeaderNav.vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';

const { isMobile } = useScreenSize();
const navigationModel = new NavigationMenuModel();

const isMobileMenuOpen = ref(false);
const dropdowns = navigationModel.getDropdowns();
</script>

<template>
  <header class="header">
    <div class="header__container">
        <LogoIcon />
        <span class="header__logo-text" >
          Redmine
          <span class="kanban">
            Kanban
          </span>
        </span>
      <button
        v-if="isMobile"
        class="header__mobile-menu-button"
        aria-label="Toggle menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span class="header__mobile-menu-icon" />
      </button>
      <HeaderNav
        :dropdowns="dropdowns"
        @select-item="({type, value}) => dropdowns[type].selected.value = value"
      />
      <div
        class="header__controls"
        :class="{ 'header__controls--active': isMobileMenuOpen }"
      >
        <UILink
          to="/resources"
          label="Resources"
        />
        <UILink
          to="/support"
          label="Support"
        />
        <LanguageSwitcher />
        <UILink
          to="/login"
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
