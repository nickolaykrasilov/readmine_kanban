<script setup>
import { ref } from 'vue';

import { useScreenSize } from '../../utils/screen.js';
import { navMenuModel, updateDropdownCurrent } from '../../models/NavigationMenuModel.js';

import UIButton from '../ui/UIButton.vue';
import UILink from '../ui/UILink.vue';
import HeaderLink from './HeaderLink.vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';

const { isMobile } = useScreenSize();

const navItems = ref(navMenuModel);
const isMenuOpen = ref(false);

function setBodyOverflow(hidden) {
  document.body.style.overflow = hidden ? 'hidden' : '';
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  setBodyOverflow(isMenuOpen.value);
};

const closeMenu = () => {
  isMenuOpen.value = false;
  setBodyOverflow(false);
};

const handleItemSelected = (type, item) => {
  updateDropdownCurrent(navItems.value.dropdowns, type, item);
  if (isMobile.value) {
    closeMenu();
  };
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__brand">
        <logoIcon class="header__logo-icon" />
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
      />
      <div
        class="header__menu"
        :class="{ 'header__menu--active': isMenuOpen || !isMobile }"
      >
        <HeaderLink
          :dropdowns="navItems.dropdowns"
          @item-selected="handleItemSelected"
        />
        <div class="header__actions">
          <UILink
            href="/support"
            label="Support"
          />
          <LanguageSwitcher />
          <UILink
            href="/login"
            label="Login"
            theme="blue"
          >
            <template #icon>
              <userIcon />
            </template>
          </UILink>
          <UIButton label="Get a Free Demo" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/header/header.scss';
</style>
