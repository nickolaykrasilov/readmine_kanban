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
        <img :src="dropdownArrow" alt="Dropdown arrow">
      </span>
    </button>
    <ul v-show="isOpen" class="language-switcher__list">
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

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import dropdownArrow from '@/assets/images/icons/check_mark.svg';

const { locale } = useI18n();

const languages = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
];

const currentLanguage = ref(locale.value.toUpperCase());
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchLanguage = (langCode) => {
  currentLanguage.value = langCode.toUpperCase();
  locale.value = langCode;
  localStorage.setItem('userLanguage', langCode);
  isOpen.value = false;
};
</script>

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
}

.language-switcher__list {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 120px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.language-switcher__item {
  padding: 8px 16px;
  cursor: pointer;
}

.language-switcher__item:hover {
  background: #f5f5f5;
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