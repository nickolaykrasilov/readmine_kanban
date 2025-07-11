<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useScreenSize } from '../../utils/screen'  
import UiButton from '../ui/UiButton.vue'            
import UiLink from '../ui/UiLink.vue'                
import HeaderNav from './HeaderNav.vue'              
import LanguageSwitcher from '../LanguageSwitcher.vue'
import logo from '../../assets/images/logo.png'
import userIcon from '../../assets/images/icons/people.svg'
const router = useRouter()
const { isMobile } = useScreenSize()

// Reactive state
const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)

// Dropdown configuration
const dropdowns = {
  plugin: {
    items: ['Plugin 1', 'Plugin 2'],
    selected: ref('Plugins')
  },
  theme: {
    items: ['Theme 1', 'Theme 2'],
    selected: ref('Themes')
  },
  pricing: {
    items: ['Basic', 'Pro'],
    selected: ref('Pricing')
  }
}

// Methods
const toggleDropdown = (dropdownName) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName
}

const selectItem = ({ type, value }) => {
  dropdowns[type].selected.value = value
  const routeMap = {
    plugin: {
      'Plugin 1': '/plugins/plugin1',
      'Plugin 2': '/plugins/plugin2'
    },
    theme: {
      'Theme 1': '/themes/theme1',
      'Theme 2': '/themes/theme2'
    },
    pricing: {
      'Basic': '/pricing/basic',
      'Pro': '/pricing/pro'
    }
  }
  router.push(routeMap[type]?.[value] || '/')
}

const handleDocumentClick = (e) => {
  if (!e.target.closest('.header__dropdown')) {
    activeDropdown.value = null
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
})
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img 
          :src="logo" 
          alt="Company Logo" 
          class="header__logo-img"
        >
      </div>
      
      <button
        v-if="isMobile"
        class="header__mobile-menu-button"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        aria-label="Toggle menu"
      >
        <span class="header__mobile-menu-icon" />
      </button>
      
      <HeaderNav
        :is-mobile="isMobile"
        :dropdowns="dropdowns"
        :active-dropdown="activeDropdown"
        @update:active-dropdown="toggleDropdown"
        @select-item="selectItem"
        :class="{ 'header__nav--active': isMobileMenuOpen }"
      />
      
      <div 
        class="header__controls" 
        :class="{ 'header__controls--active': isMobileMenuOpen }"
      >
        <UiLink 
          to="/support" 
          text="Support" 
          class="header__nav-link"
        />
        
        <LanguageSwitcher />
        
        <UiLink 
          to="/login" 
          text="Login" 
          :icon="userIcon" 
          icon-alt="User icon"
          is-login
          class="header__login-link"
        />
        
        <UiButton class="header__demo-btn">
          Get Demo
        </UiButton>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>