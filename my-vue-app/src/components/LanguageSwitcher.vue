<script setup>
import { ref, onMounted } from 'vue';
import dropdownArrow from '../assets/images/icons/check-mark.svg';

const languages = [{ 
    code: 'en', 
    name: 'English' 
},
  { 
    code: 'ru', 
    name: 'Русский' 
},];

const currentLanguage = ref('EN');
const isOpen = ref(false);

onMounted(() => {
  const savedLang = localStorage.getItem('userLanguage');
  if (savedLang) {
    currentLanguage.value = savedLang.toUpperCase();
  }
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchLanguage = (langCode) => {
  currentLanguage.value = langCode.toUpperCase();
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

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
  margin-left: 16px;
}

.language-switcher__button {
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.language-switcher__button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.language-switcher__list {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  list-style: none;
  padding: 4px 0;
  margin: 4px 0 0;
  min-width: 120px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.language-switcher__item {
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.language-switcher__item:hover {
  background-color: #f5f5f5;
}

.language-switcher__arrow img {
  width: 12px;
  height: 12px;
  transition: transform 0.2s;
}

.language-switcher__button[aria-expanded="true"] .language-switcher__arrow img {
  transform: rotate(180deg);
}
</style>
