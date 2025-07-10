<script setup>
import { ref } from 'vue';
import dropdownArrow from '../../assets/images/icons/check_mark.svg';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  initialValue: {  
    type: String,
    default: null,
  }
});

const emit = defineEmits(['select']); 
const isOpen = ref(false);
const selectedValue = ref(props.initialValue || props.items[0]); 

const toggle = () => {
  isOpen.value = !isOpen.value; 
};

const selectItem = (value) => {
  selectedValue.value = value;
  emit('select', value); 
  isOpen.value = false;
};
</script>

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
        <img :src="dropdownArrow" 
        alt="Dropdown arrow" 
        class="dropdown-arrow-icon">
      </span>
    </button>
    <ul 
    class="header__dropdown-list" 
    v-show="isOpen">
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

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
