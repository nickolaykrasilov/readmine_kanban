<script setup>
import DropDownMenu from './DropDownMenu.vue';
import UILink from '../ui/UILink.vue';

defineProps({
  dropdowns: Object,
  links: Object,
});

const emit = defineEmits(['item-selected']);

const handleItemSelected = (type, item) => {
  emit('item-selected', type, item);
};
</script>

<template>
  <nav class="header-nav">
    <template 
      v-for="(config, type) in dropdowns" 
      :key="`dropdown-${type}`"
    >
      <DropDownMenu
        v-if="config.type === 'dropdown'"
        :type="type"
        :items="config.items || []"
        :current-item="config.current"  
        @item-selected="(item) => handleItemSelected(type, item)"
      />
      <UILink
        v-else-if="config.type === 'link'"
        :key="`link-${type}`"
        :href="config.current.href"
        :label="config.current.label"
      />
    </template>
    <UILink
      v-for="(link, key) in links"
      :key="`link-${key}`"
      :href="link.href"
      :label="link.text"
    />
  </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/header/header.scss';
</style>
