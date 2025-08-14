<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: false,
  },
  currentItem: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: 'default',
  }
})

const emit = defineEmits(['item-selected']);

const isOpen = ref(false);
const dropdownRef = ref(null);

const hasDropdown = computed(() => !!props.items.length);

const handleClickOutside = (event) => {
  if (!hasDropdown.value) return;

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
  if (!hasDropdown.value) return;

  event.preventDefault();
  isOpen.value = !isOpen.value;
};

const handleItemClick = (item) => {
  if (!hasDropdown.value) return;

  emit('item-selected', item);
  isOpen.value = false;
};
</script>

<template>
  <div
    :class="{
      'header__dropdown': true,
      'header__dropdown--simple': !hasDropdown,
    }"
    ref="dropdownRef"
  >
    <a
      :href="currentItem.href"
      class="header__dropdown-link"
      @click="toggleDropdown"
      :aria-expanded="hasDropdown ? isOpen : undefined"
      :aria-haspopup="hasDropdown ? 'true' : undefined"
    >
      {{ currentItem.label }}
      <span
        v-if="hasDropdown"
        :class="{
          'header__dropdown-arrow': true,
          'header__dropdown-arrow--open': isOpen,
        }"
      >
        <chevronIcon />
      </span>
    </a>
    <ul 
      v-if="hasDropdown && isOpen" 
      class="header__dropdown-list"
      aria-hidden="false"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="header__dropdown-item"
      >
        <a
          :href="item.href"
          class="header__dropdown-sublink"
          @click="handleItemClick(item)"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/header/drop-down-menu.scss';
</style>
