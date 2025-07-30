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
.header-nav {
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  &__link {
    @media (max-width: 767px) {
      font-size: 1.2rem;
      padding: 0.5rem 0;
    }
  }
}
</style>