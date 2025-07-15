<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  selectedValue: {
    type: String,
    required: true,
  },
  type: String,
});

const emit = defineEmits(['select']);

const isOpen = ref(false);
const dropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const toggleDropdown = (event) => {
  event.stopPropagation();
  isOpen.value = !isOpen.value;
};

const selectItem = (value) => {
  emit('select', value);
  isOpen.value = false;
};
</script>

<template>
  <div class="header__dropdown" ref="dropdownRef">
    <button
      class="header__dropdown-button"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click="toggleDropdown"
    >
      {{ selectedValue }}
    <span 
      class="header__dropdown-arrow" 
      :class="{ 'header__dropdown-arrow--open': isOpen }"
    >
      <svg 
        width="10" 
        height="6" 
        viewBox="0 0 10 6" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0.638672 1L5.13867 5L9.63867 1" 
          stroke="#3D3D3D"
        />
      </svg>
    </span>
    </button>
    <transition name="dropdown">
      <ul
        v-show="isOpen"
        class="header__dropdown-list"
        :aria-hidden="!isOpen"
      >
        <li
          v-for="item in items"
          :key="item"
          class="header__dropdown-item"
          @click="selectItem(item)"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/drop-down-menu.scss';
</style>
