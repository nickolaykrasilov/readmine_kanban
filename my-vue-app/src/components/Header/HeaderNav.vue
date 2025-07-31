<script setup>
import DropdownMenu from './DropdownMenu.vue';
import UILink from '../ui/UILink.vue';

defineProps({
  dropdowns: Object,
  links: Object
});

defineEmits(['item-selected']);
</script>

<template>
  <nav class="header-nav">
    <template v-for="(config, type) in dropdowns" :key="`dropdown-${type}`">
      <DropdownMenu
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
      class="header-nav__link"
    />
  </nav>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/header/header.scss';
</style>
