<script setup>
import DropDownMenu from './DropDownMenu.vue';
import UILink from '../ui/UILink.vue';

defineProps({
  dropdowns: Object,
  links: Object,
});
</script>

<template>
  <nav class="header-nav">
    <template 
      v-for="(config, type) in dropdowns" 
      :key="`dropdown-${type}`"
    >
      <DropDownMenu
        :type="type"
        :items="config.items || []"
        :current-item="config.current.value"
        @item-selected="(item) => $emit('item-selected', item)"
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
