<script setup>
import logo from '../assets/images/logo.png';
import userIcon from '../assets/icons/people.svg';
import DemoButton from './DemoButton.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import '../assets/styles/Header.scss';

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
