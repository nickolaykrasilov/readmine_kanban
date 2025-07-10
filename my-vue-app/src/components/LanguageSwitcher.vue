<script setup>
import { ref, onMounted } from 'vue';
import dropdownArrow from '../assets/images/icons/check-mark.svg';

const languages = [
  { 
    code: 'En', 
    name: 'English' ,
  },
  { 
    code: 'Ru', 
    name: 'Русский' ,
  }
];

const currentLanguage = ref('En');
const isOpen = ref(false);

onMounted(() => {
  const savedLang = localStorage.getItem('userLanguage');
  if (savedLang) {
    currentLanguage.value = savedLang; 
  }
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
  <div class="language-switcher">
    <button
      class="language-switcher__button"
      @click="toggleDropdown"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      {{ currentLanguage }}
      <span class="language-switcher__arrow">
        <img 
          :src="dropdownArrow" 
          alt="Dropdown arrow"
        >
      </span>
    </button>
    <ul 
      v-show="isOpen" 
      class="language-switcher__list"
    >
      <li
        v-for="lang in languages"
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
