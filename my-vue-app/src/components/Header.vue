<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DemoButton from './DemoButton.vue'
import logo from '../assets/images/logo.png'
import userIcon from '../assets/icons/people.svg'
import dropdownArrow from '../assets/icons/check_mark.svg'

const isMobileMenuOpen = ref(false)
const isMobile = ref(false)
const activeDropdown = ref(null)

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

const toggleDropdown = (dropdownName) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName
}

const closeDropdowns = () => {
  activeDropdown.value = null
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
        <img :src="logo" alt="Company Logo" class="header__logo-img">
      </div>

      <button 
        class="header__mobile-menu-button" 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        v-if="isMobile"
        aria-label="Toggle menu"
      >
        <span class="header__mobile-menu-icon"></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--active': isMobileMenuOpen }">
        <div class="header__dropdown">
          <button 
            class="header__dropdown-button"
            @click="toggleDropdown('plugins')"
            @blur="closeDropdowns"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'plugins'"
          >
            Plugins
            <span class="header__dropdown-arrow">
              <img 
                :src="dropdownArrow" 
                alt="Dropdown arrow"
                class="dropdown-arrow-icon"
              />
            </span>
          </button>
          <ul 
            class="header__dropdown-list"
            v-show="activeDropdown === 'plugins'"
          >
            <li class="header__dropdown-item">Plugin 1</li>
            <li class="header__dropdown-item">Plugin 2</li>
          </ul>
        </div>
        
        <div class="header__dropdown">
          <button 
            class="header__dropdown-button"
            @click="toggleDropdown('themes')"
            @blur="closeDropdowns"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'themes'"
          >
            Themes
            <span class="header__dropdown-arrow">
              <img 
                :src="dropdownArrow" 
                alt="Dropdown arrow"
                class="dropdown-arrow-icon"
              />
            </span>
          </button>
          <ul 
            class="header__dropdown-list"
            v-show="activeDropdown === 'themes'"
          >
            <li class="header__dropdown-item">Theme 1</li>
            <li class="header__dropdown-item">Theme 2</li>
          </ul>
        </div>
        
        <div class="header__dropdown">
          <button 
            class="header__dropdown-button"
            @click="toggleDropdown('pricing')"
            @blur="closeDropdowns"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'pricing'"
          >
            Pricing
            <span class="header__dropdown-arrow">
              <img 
                :src="dropdownArrow" 
                alt="Dropdown arrow"
                class="dropdown-arrow-icon"
              />
            </span>
          </button>
          <ul 
            class="header__dropdown-list"
            v-show="activeDropdown === 'pricing'"
          >
            <li class="header__dropdown-item">Basic</li>
            <li class="header__dropdown-item">Pro</li>
          </ul>
        </div>
        
        <a href="#" class="header__nav-link">Resources</a>
      </nav>

      <div class="header__controls" :class="{ 'header__controls--active': isMobileMenuOpen }">
        <a href="#" class="header__nav-link">Support</a>
        
        <div class="header__dropdown">
          <button 
            class="header__dropdown-button"
            @click="toggleDropdown('language')"
            @blur="closeDropdowns"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'language'"
          >
            En
            <span class="header__dropdown-arrow">
              <img 
                :src="dropdownArrow" 
                alt="Dropdown arrow"
                class="dropdown-arrow-icon"
              />
            </span>
          </button>
          <ul 
            class="header__dropdown-list"
            v-show="activeDropdown === 'language'"
          >
            <li class="header__dropdown-item">En</li>
            <li class="header__dropdown-item">Ru</li>
          </ul>
        </div>
        
        <a href="#" class="header__login-link">
          <span class="header__login-text">Login</span>
          <img :src="userIcon" alt="User icon" class="header__login-icon">
        </a>
        <DemoButton class="header__demo-btn" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/styles/Header.scss';
</style>
