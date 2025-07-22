<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { LANGUAGES, DEFAULT_LANGUAGE } from '../models/languages.js';

const currentLanguage = ref(DEFAULT_LANGUAGE);
const isOpen = ref(false);
const dropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  const savedLang = localStorage.getItem('userLanguage');

  if (savedLang) {
    currentLanguage.value = savedLang;
  }
  
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchLanguage = (langCode) => {
  currentLanguage.value = langCode;
  localStorage.setItem('userLanguage', langCode);
  isOpen.value = false;
};
</script>

<template>
  <div class="language-switcher" ref="dropdownRef">
    <button
      class="language-switcher__button"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click="toggleDropdown"
    >
      {{ currentLanguage }}
      <span class="language-switcher__arrow">
        <ChevronIcon/>
      </span>
    </button>
    <ul
      v-show="isOpen"
      class="language-switcher__list"
    >
      <li
        v-for="lang in LANGUAGES"
        :key="lang.code"
        class="language-switcher__item"
        @click="switchLanguage(lang.code)"
      >
        {{ lang.name }}
      </li>
    </ul>   
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/styles/components/language-switcher.scss';
</style>
