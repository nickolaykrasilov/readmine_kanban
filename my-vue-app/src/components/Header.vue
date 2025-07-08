<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import DemoButton from './DemoButton.vue'
import logo from '../assets/images/logo.png'
import userIcon from '../assets/icons/people.svg'
import dropdownArrow from '../assets/icons/check_mark.svg'

// Reactive state
const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)
const isMobile = ref(false)

// Selected values with computed for better reactivity
const selected = {
  plugin: ref('Plugins'),
  theme: ref('Themes'),
  pricing: ref('Pricing'),
  language: ref('En')
}

// Dropdown configuration
const dropdowns = {
  plugin: {
    items: ['Plugin 1', 'Plugin 2'],
    selected: selected.plugin
  },
  theme: {
    items: ['Theme 1', 'Theme 2'],
    selected: selected.theme
  },
  pricing: {
    items: ['Basic', 'Pro'],
    selected: selected.pricing
  },
  language: {
    items: ['En', 'Ru'],
    selected: selected.language
  }
}

// Methods
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
  if (dropdowns[type]) {
    dropdowns[type].selected.value = value
    setTimeout(closeDropdowns, 100)
  }
}

const handleDocumentClick = (e) => {
  if (!e.target.closest('.header__dropdown')) {
    closeDropdowns()
  }
}

// Lifecycle hooks
onMounted(() => {
  checkScreenSize()
  window.addEventListener('resize', checkScreenSize)
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize)
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="logo" alt="Company Logo" class="header__logo-img">
      </div>

      <button
        v-if="isMobile"
        class="header__mobile-menu-button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span class="header__mobile-menu-icon"></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--active': isMobileMenuOpen }">
        <div
          v-for="(config, type) in { plugin: dropdowns.plugin, theme: dropdowns.theme, pricing: dropdowns.pricing }"
          :key="type"
          class="header__dropdown"
        >
          <button
            class="header__dropdown-button"
            @click="toggleDropdown(type)"
            aria-haspopup="true"
            :aria-expanded="activeDropdown === type"
          >
            {{ config.selected.value }}
            <span class="header__dropdown-arrow">
              <img :src="dropdownArrow" alt="Dropdown arrow" class="dropdown-arrow-icon">
            </span>
          </button>

          <ul class="header__dropdown-list" v-show="activeDropdown === type">
            <li
              v-for="item in config.items"
              :key="item"
              class="header__dropdown-item"
              @click.stop="selectItem(type, item)"
            >
              {{ item }}
            </li>
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
            {{ dropdowns.language.selected.value }}
            <span class="header__dropdown-arrow">
              <img :src="dropdownArrow" alt="Dropdown arrow" class="dropdown-arrow-icon">
            </span>
          </button>

          <ul class="header__dropdown-list" v-show="activeDropdown === 'language'">
            <li
              v-for="lang in dropdowns.language.items"
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
