<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DemoButton from './DemoButton.vue'
import logo from '../assets/images/logo.png'
import userIcon from '../assets/icons/people.svg'
import dropdownArrow from '../assets/icons/check_mark.svg'

// Состояние компонента
const isMobileMenuOpen = ref(false)
const isMobile = ref(false)
const activeDropdown = ref(null)

// Выбранные значения
const selectedValues = {
  plugin: ref('Plugins'),
  theme: ref('Themes'),
  pricing: ref('Pricing'),
  language: ref('En')
}

// Методы
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
  if (selectedValues[type]) {
    selectedValues[type].value = value
  }
  setTimeout(closeDropdowns, 100)
}

// Хуки жизненного цикла
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
  document.removeEventListener('click', handleDocumentClick)
})

// Вспомогательные функции
const handleDocumentClick = (e) => {
  if (!e.target.closest('.header__dropdown')) {
    closeDropdowns()
  }
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <!-- Логотип -->
      <div class="header__logo">
        <img :src="logo" alt="Company Logo" class="header__logo-img">
      </div>

      <!-- Кнопка мобильного меню -->
      <button 
        v-if="isMobile"
        class="header__mobile-menu-button" 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span class="header__mobile-menu-icon"></span>
      </button>

      <!-- Основная навигация -->
      <nav class="header__nav" :class="{ 'header__nav--active': isMobileMenuOpen }">
        <div 
          v-for="(item, index) in [
            { type: 'plugin', name: 'Plugins', items: ['Plugin 1', 'Plugin 2'] },
            { type: 'theme', name: 'Themes', items: ['Theme 1', 'Theme 2'] },
            { type: 'pricing', name: 'Pricing', items: ['Basic', 'Pro'] }
          ]" 
          :key="index"
          class="header__dropdown"
        >
          <button 
            class="header__dropdown-button"
            @click="toggleDropdown(item.type)"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === item.type"
          >
            {{ selectedValues[item.type].value }}
            <span class="header__dropdown-arrow">
              <img :src="dropdownArrow" alt="Dropdown arrow" class="dropdown-arrow-icon">
            </span>
          </button>
          
          <ul class="header__dropdown-list" v-show="activeDropdown === item.type">
            <li 
              v-for="(subItem, subIndex) in item.items"
              :key="subIndex"
              class="header__dropdown-item" 
              @click.stop="selectItem(item.type, subItem)"
            >
              {{ subItem }}
            </li>
          </ul>
        </div>
        
        <a href="#" class="header__nav-link">Resources</a>
      </nav>

      <!-- Управляющие элементы -->
      <div class="header__controls" :class="{ 'header__controls--active': isMobileMenuOpen }">
        <a href="#" class="header__nav-link">Support</a>
        
        <div class="header__dropdown">
          <button 
            class="header__dropdown-button"
            @click="toggleDropdown('language')"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === 'language'"
          >
            {{ selectedValues.language.value }}
            <span class="header__dropdown-arrow">
              <img :src="dropdownArrow" alt="Dropdown arrow" class="dropdown-arrow-icon">
            </span>
          </button>
          
          <ul class="header__dropdown-list" v-show="activeDropdown === 'language'">
            <li 
              v-for="lang in ['En', 'Ru']"
              :key="lang"
              class="header__dropdown-item" 
              @click.stop="selectItem('language', lang)"
            >
              {{ lang }}
            </li>
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
