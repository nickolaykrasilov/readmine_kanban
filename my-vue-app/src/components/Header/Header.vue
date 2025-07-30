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

const handleItemSelected = () => {
  if (isMobile.value) {
    isMenuOpen.value = false;
    document.body.style.overflow = '';
  }
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__brand">
        <LogoIcon class="header__logo-icon" />
        <span class="header__logo-text">
          Redmine<span class="header__logo-highlight">Kanban</span>
        </span>
      </div>

      <!-- Мобильная кнопка меню -->
      <button
        v-if="isMobile"
        class="header__menu-toggle"
        :class="{ 'header__menu-toggle--active': isMenuOpen }"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <span class="header__menu-icon"></span>
      </button>

      <!-- Основное меню -->
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

.header {
  position: relative;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__logo-icon {
    width: 32px;
    height: 32px;
  }

  &__logo-text {
    font-size: 1.25rem;
    font-weight: 600;
  }

  &__logo-highlight {
    color: #3b82f6;
  }

  &__menu-toggle {
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    z-index: 100;

    &--active {
      .header__menu-icon {
        background: transparent;
        
        &::before {
          transform: rotate(45deg);
          top: 0;
        }
        
        &::after {
          transform: rotate(-45deg);
          top: 0;
        }
      }
    }
  }

  &__menu-icon {
    position: relative;
    display: block;
    width: 24px;
    height: 2px;
    background: #333;
    transition: all 0.3s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: inherit;
      left: 0;
      transition: all 0.3s ease;
    }

    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 767px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: white;
      flex-direction: column;
      justify-content: center;
      padding: 2rem;
      z-index: 99;
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.3s ease;

      &--active {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 767px) {
      flex-direction: column;
      width: 100%;
      margin-top: 1rem;
    }
  }
}
</style>