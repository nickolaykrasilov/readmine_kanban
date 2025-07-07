<script setup>
import logo from '../assets/images/logo.png'
import userIcon from '../assets/icons/people.png'
import DemoButton from './DemoButton.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMobileMenuOpen = ref(false)
const isMobile = ref(false)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
})
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="logo" alt="Logo" class="header__logo-img">
      </div>

      <button 
        class="header__mobile-menu-button" 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        v-if="isMobile"
      >
        <span class="header__mobile-menu-icon"></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--active': isMobileMenuOpen }">
        <div class="header__dropdown">
          <select class="header__dropdown-select">
            <option>Plugins</option>
            <option>Plugin 1</option>
            <option>Plugin 2</option>
          </select>
        </div>
        
        <div class="header__dropdown">
          <select class="header__dropdown-select">
            <option>Themes</option>
            <option>Theme 1</option>
            <option>Theme 2</option>
          </select>
        </div>
        
        <div class="header__dropdown">
          <select class="header__dropdown-select">
            <option>Pricing</option>
            <option>Basic</option>
            <option>Pro</option>
          </select>
        </div>
        
        <a href="#" class="header__nav-link">Resources</a>
      </nav>

      <div class="header__controls" :class="{ 'header__controls--active': isMobileMenuOpen }">
        <a href="#" class="header__nav-link">Support</a>
        <div class="header__lang-switcher">
          <select class="header__lang-select">
            <option>En</option>
            <option>Ru</option>
          </select>
        </div>
        <a href="#" class="header__login-link">
          <span class="header__login-text">Login</span>
          <img :src="userIcon" alt="User" class="header__login-icon">
        </a>
        <DemoButton class="header__demo-btn" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    flex-wrap: wrap;
  }

  &__logo-img {
    height: 40px;
    width: auto;
  }

  &__mobile-menu-button {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;

    @media (max-width: 767px) {
      display: block;
    }
  }

  &__mobile-menu-icon {
    display: block;
    width: 25px;
    height: 2px;
    background: #333;
    position: relative;
    transition: all 0.3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: #333;
      left: 0;
      transition: all 0.3s;
    }

    &::before {
      top: -8px;
    }

    &::after {
      bottom: -8px;
    }
  }

  &__nav {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    transition: all 0.3s ease;

    @media (max-width: 767px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #fff;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      z-index: 1000;
      transform: translateX(-100%);
      padding: 80px 20px 20px;

      &--active {
        transform: translateX(0);
      }
    }
  }

  &__dropdown {
    position: relative;
    
    &::after {
      content: "";
      position: absolute;
      right: 8px;
      top: 50%;
      width: 10px;
      height: 10px;
      background-image: url("data:image/svg+xml,\
        %3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none'\
          xmlns='http://www.w3.org/2000/svg'%3E\
          %3Cpath d='M1 3.5L5 7.5L9 3.5'\
            stroke='%23333'\
            stroke-width='1.5'\
            stroke-linecap='round'\
            stroke-linejoin='round'/%3E\
        %3C/svg%3E");
      background-repeat: no-repeat;
      transform: translateY(-50%);
      pointer-events: none;
      opacity: 1;

      @media (max-width: 767px) {
        right: 15px;
      }
    }

    &-select {
      padding: 0.5rem 25px 0.5rem 0.5rem;
      border: none;
      font-weight: 500;
      color: #333;
      cursor: pointer;
      background-color: transparent;
      appearance: none;
      transition: color 0.2s ease;
      font-size: 15px;
      line-height: 1.5;

      @media (max-width: 767px) {
        padding: 1rem 35px 1rem 1rem;
        font-size: 18px;
      }

      &:hover {
        color: #0066ff;
        
        & + .header__dropdown::after {
          background-image: url("data:image/svg+xml,\
            %3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none'\
              xmlns='http://www.w3.org/2000/svg'%3E\
              %3Cpath d='M1 3.5L5 7.5L9 3.5'\
                stroke='%230066ff'\
                stroke-width='1.5'\
                stroke-linecap='round'\
                stroke-linejoin='round'/%3E\
            %3C/svg%3E");
        }
      }

      &:focus {
        outline: none;
      }
    }
  }

  &__nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    font-size: 15px;
    line-height: 1.5;

    @media (max-width: 767px) {
      font-size: 18px;
      padding: 1rem;
    }

    &:hover {
      color: #0066ff;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    transition: all 0.3s ease;

    @media (max-width: 767px) {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: #fff;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      z-index: 1000;
      transform: translateX(-100%);
      padding: 80px 20px 20px;

      &--active {
        transform: translateX(0);
      }
    }
  }

  &__lang-switcher {
    position: relative;
    
    &::after {
      content: "";
      position: absolute;
      right: 8px;
      top: 50%;
      width: 10px;
      height: 10px;
      background-image: url("data:image/svg+xml,\
        %3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none'\
          xmlns='http://www.w3.org/2000/svg'%3E\
          %3Cpath d='M1 3.5L5 7.5L9 3.5'\
            stroke='%23333'\
            stroke-width='1.5'\
            stroke-linecap='round'\
            stroke-linejoin='round'/%3E\
        %3C/svg%3E");
      background-repeat: no-repeat;
      transform: translateY(-50%);
      pointer-events: none;
      opacity: 1;

      @media (max-width: 767px) {
        right: 15px;
      }
    }
  }

  &__lang-select {
    padding: 0.5rem 25px 0.5rem 0.5rem;
    border: none;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    background-color: transparent;
    appearance: none;
    transition: color 0.2s ease;
    font-size: 15px;
    line-height: 1.5;

    @media (max-width: 767px) {
      padding: 1rem 35px 1rem 1rem;
      font-size: 18px;
    }

    &:hover {
      color: #0066ff;
      
      & + .header__lang-switcher::after {
        background-image: url("data:image/svg+xml,\
          %3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none'\
            xmlns='http://www.w3.org/2000/svg'%3E\
            %3Cpath d='M1 3.5L5 7.5L9 3.5'\
              stroke='%230066ff'\
              stroke-width='1.5'\
              stroke-linecap='round'\
              stroke-linejoin='round'/%3E\
          %3C/svg%3E");
      }
    }
  }

  &__login {
    &-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;

      @media (max-width: 767px) {
        padding: 1rem;
      }
    }

    &-text {
      color: #0094FF;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 100%;

      @media (max-width: 767px) {
        font-size: 18px;
      }
    }

    &-icon {
      width: 16px;
      height: 16px;

      @media (max-width: 767px) {
        width: 20px;
        height: 20px;
      }
    }
  }

  @media (max-width: 767px) {
    .header__mobile-menu-button {
      display: block;
    }

    .header__nav,
    .header__controls {
      display: none;

      &--active {
        display: flex;
      }
    }
  }
}
</style>