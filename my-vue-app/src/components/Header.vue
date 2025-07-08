<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DemoButton from './DemoButton.vue'
import logo from '../assets/images/logo.png'
import userIcon from '../assets/icons/people.svg'
import dropdownArrow from '../assets/icons/check_mark.svg'

const isMobileMenuOpen = ref(false)
const isMobile = ref(false)
const activeDropdown = ref(null)

const selectedPlugin = ref('Plugins')
const selectedTheme = ref('Themes')
const selectedPricing = ref('Pricing')
const selectedLanguage = ref('En')

const checkScreenSize = () => {
  isMobile.value = window.innerWidth < 768
}

const toggleDropdown = (dropdownName) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName
}

const closeDropdowns = () => {
  activeDropdown.value = null
}

const selectItem = (type, value) => {
  switch(type) {
    case 'plugin':
      selectedPlugin.value = value
      break
    case 'theme':
      selectedTheme.value = value
      break
    case 'pricing':
      selectedPricing.value = value
      break
    case 'language':
      selectedLanguage.value = value
      break
  }
  setTimeout(closeDropdowns, 100)
}

onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__dropdown')) {
      closeDropdowns()
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
  document.removeEventListener('click', (e) => {
    if (!e.target.closest('.header__dropdown')) {
      closeDropdowns()
    }
  })
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
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'plugins'"
          >
            {{ selectedPlugin }}
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
            <li 
              class="header__dropdown-item" 
              @click.stop="selectItem('plugin', 'Plugin 1')"
            >Plugin 1</li>
            <li 
              class="header__dropdown-item" 
              @click.stop="selectItem('plugin', 'Plugin 2')"
            >Plugin 2</li>
          </ul>
        </div>
        
        <div class="header__dropdown">
          <button 
            class="header__dropdown-button"
            @click="toggleDropdown('themes')"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'themes'"
          >
            {{ selectedTheme }}
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
            <li 
              class="header__dropdown-item" 
              @click.stop="selectItem('theme', 'Theme 1')"
            >Theme 1</li>
            <li 
              class="header__dropdown-item" 
              @click.stop="selectItem('theme', 'Theme 2')"
            >Theme 2</li>
          </ul>
        </div>
        
        <div class="header__dropdown">
          <button 
            class="header__dropdown-button"
            @click="toggleDropdown('pricing')"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'pricing'"
          >
            {{ selectedPricing }}
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
            <li 
              class="header__dropdown-item" 
              @click.stop="selectItem('pricing', 'Basic')"
            >Basic</li>
            <li 
              class="header__dropdown-item" 
              @click.stop="selectItem('pricing', 'Pro')"
            >Pro</li>
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
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'language'"
          >
            {{ selectedLanguage }}
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
            <li 
              class="header__dropdown-item" 
              @click.stop="selectItem('language', 'En')"
            >En</li>
            <li 
              class="header__dropdown-item" 
              @click.stop="selectItem('language', 'Ru')"
            >Ru</li>
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
