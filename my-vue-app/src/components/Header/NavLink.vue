<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
    validator: (item) => typeof item === 'object' && 'text' in item && 'href' in item
  }
});
</script>

<template>
  <div class="header__nav-link">
    <a
      :href="item.href"
      class="header__nav-simple-link"
    >
      {{ item.text }}
    </a>
  </div>
</template>

