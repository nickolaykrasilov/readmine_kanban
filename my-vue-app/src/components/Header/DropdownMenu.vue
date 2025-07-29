<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true,
  },
  selectedValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['select']);

const isOpen = ref(false);
const dropdownRef = ref(null);

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  };
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
        :class="[
          'header__dropdown-arrow',
          { 'header__dropdown-arrow--open': isOpen },
        ]"
      >
        <ChevronIcon />
      </span>
    </button>
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
  </div>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/drop-down-menu.scss';
</style>
