<script setup>
import { ref } from 'vue';

import { useScreenSize } from '../../utils/screen.js';
import { navMenuModel, updateDropdownCurrent } from '../../models/NavigationMenuModel.js';

import UIButton from '../ui/UIButton.vue';
import UILink from '../ui/UILink.vue';
import HeaderLink from './HeaderLink.vue';
import LanguageSwitcher from '../LanguageSwitcher.vue';
import Logo from '../Logo.vue'; // Импортируем компонент Logo

const { isTablet} = useScreenSize();

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
  if (isTablet.value) {
    closeMenu();
  };
};
</script>

<template>
  <header class="header">
    <div class="header__container">
        <Logo size="50" color="black" />
      <button
        v-if="isTablet"
        class="header__tablet-menu-button"
        @click="toggleMenu"
        aria-label="Toggle menu"
      />
      <div
        :class="{
          'header__menu': true,
          'header__menu--active': isMenuOpen,
        }"
      >
        <HeaderLink
          :dropdowns="navItems.dropdowns"
          @item-selected="handleItemSelected"
        />
        <div class="header__actions">
          <UILink
            href="/support"
            label="Support"
            theme="black"
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