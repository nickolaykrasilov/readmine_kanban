<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  items: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(item => typeof item === 'object' && 'text' in item && 'href' in item);
    }
  },
  currentItem: {
    type: Object,
    required: true,
    validator: (item) => typeof item === 'object' && 'text' in item && 'href' in item
  },
});

const emit = defineEmits(['item-selected']);

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
  event.preventDefault();
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item, event) => {
  emit('item-selected', item);
  isOpen.value = false;
};
</script>

<template>
  <div class="header__dropdown" ref="dropdownRef">
    <a
      :href="currentItem.href"
      class="header__dropdown-link"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      {{ currentItem.text }}
      <span
        :class="[
          'header__dropdown-arrow',
          { 'header__dropdown-arrow--open': isOpen },
        ]"
      >
        <ChevronIcon />
      </span>
    </a>
    <ul
      v-show="isOpen"
      class="header__dropdown-list"
      :aria-hidden="!isOpen"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="header__dropdown-item"
      >
        <a
          :href="item.href"
          class="header__dropdown-sublink"
          @click="handleItemClick(item, $event)"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/header/drop-down-menu.scss';

.header__dropdown {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;

  &-link {
    text-decoration: none; /* Добавлено для ссылки */
  }

  &-arrow {
    transition: transform 0.2s ease;
    
    &--open {
      transform: rotate(180deg);
    }
  }


}
</style>