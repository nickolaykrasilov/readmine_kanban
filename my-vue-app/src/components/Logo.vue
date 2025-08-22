<template>
  <div class="logo">
    <logoIcon :size="size" />
    <span
      class="logo__text"
      :class="`logo__text--${color}`"
    >
      Redmine
      <span class="logo__text-part">
        Kanban
      </span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 60,
  },
  color: {
    type: String,
    default: 'blue',
  },
});
</script>

<style lang="scss" scoped>
@import '../assets/styles/components/logo.scss';
</style>
