<script setup>
import { computed } from 'vue'
import DropdownMenu from './DropdownMenu.vue'

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false,
  },
  dropdowns: {
    type: Object,
    required: true,
  },
  activeDropdown: {
    type: String,
    default: null,
  }
})

const emit = defineEmits(['update:activeDropdown', 'selectItem'])

const visibleDropdowns = computed(() => {
  const { language, ...rest } = props.dropdowns
  return rest
})

const toggleDropdown = (type) => {
  emit('update:activeDropdown', props.activeDropdown === type ? null : type)
}
</script>

<template>
  <nav class="header__nav">
    <DropdownMenu
      v-for="(config, type) in visibleDropdowns"
      :key="type"
      :type="type"
      :items="config.items"
      :selected-value="config.selected.value"
      :is-open="activeDropdown === type"
      @update:is-open="(isOpen) => isOpen ? toggleDropdown(type) : emit('update:activeDropdown', null)"
      @select="(value) => emit('selectItem', { type, value })"
    />
    <router-link to="/resources" class="header__nav-link">
      Resources
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/header/header.scss';
</style>
