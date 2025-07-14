<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useScreenSize } from '../../utils/screen'
import UIButton from '../ui/UIButton.vue'
import UILink from '../ui/UILink.vue'
import HeaderNav from './HeaderNav.vue'
import LanguageSwitcher from '../LanguageSwitcher.vue'
import logo from '../../assets/images/logo.png'
import userIcon from '../../assets/images/icons/people.svg'

const router = useRouter()
const { isMobile } = useScreenSize()

const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)

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

const toggleDropdown = (dropdownName) => {
  activeDropdown.value = activeDropdown.value === dropdownName ? null : dropdownName
}

const selectItem = ({ type, value }) => {
  dropdowns[type].selected.value = value
  router.push(routeMap[type]?.[value] || '/')
}

const handleDocumentClick = (e) => {
  if (!e.target.closest('.header__dropdown')) {
    activeDropdown.value = null
  }
}

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
      <UILink
        to="/"
        class="header__logo"
      >
        <img
          :src="logo"
          alt="Company Logo"
          class="header__logo-img"
        >
      </UILink>

      <button
        v-if="isMobile"
        class="header__mobile-menu-button"
        aria-label="Toggle menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span class="header__mobile-menu-icon" />
      </button>

      <HeaderNav
        :is-mobile="isMobile"
        :dropdowns="dropdowns"
        :active-dropdown="activeDropdown"
        :class="{ 'header__nav--active': isMobileMenuOpen }"
        @update:active-dropdown="toggleDropdown"
        @select-item="selectItem"
      />

      <div
        class="header__controls"
        :class="{ 'header__controls--active': isMobileMenuOpen }"
      >
        <UILink
          to="/support"
          variant="text"
          text="Support"
          class="header__nav-link"
        />

        <LanguageSwitcher />

        <UILink
          to="/login"
          variant="text"
          :icon-left="userIcon"
          class="header__login-link"
        >
          <template #default>Login</template>
        </UILink>

        <UIButton
          label="Get Demo"
          class="header__demo-button"
        />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
