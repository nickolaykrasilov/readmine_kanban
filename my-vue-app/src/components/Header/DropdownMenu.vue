<template>
  <div class="header__dropdown">
    <button
      class="header__dropdown-button"
      @click.stop="toggle"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      {{ selectedValue }}
      <span class="header__dropdown-arrow">
        <img :src="dropdownArrow" alt="Dropdown arrow" class="dropdown-arrow-icon">
      </span>
    </button>
    <ul class="header__dropdown-list" v-show="isOpen">
      <li
        v-for="item in items"
        :key="item"
        class="header__dropdown-item"
        @click.stop="selectItem(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import dropdownArrow from '../../assets/images/icons/check-mark.svg';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  selectedValue: {
    type: String,
    required: true,
  },
  isOpen: Boolean,
  type: String
});

const emit = defineEmits(['update:isOpen', 'select']);

const toggle = () => {
  emit('update:isOpen', !props.isOpen);
};

const selectItem = (value) => {
  emit('select', value);
};
</script>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
