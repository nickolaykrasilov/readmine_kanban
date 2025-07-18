<template>
  <div class="card">
    <!-- Заголовок через слот -->
    <h3 v-if="$slots.title" class="card-title">
      <slot name="title"></slot>
    </h3>

    <!-- Описание через слот -->
    <p v-if="$slots.description" class="card-subtitle">
      <slot name="description"></slot>
    </p>

    <!-- Кнопка (всегда отображается, если не передано showButton=false) -->
    <button 
      v-if="showButton"
      class="card-button" 
      @click="$emit('details-click')"
    >
      More details
      <span class="arrow">→</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "UICard",
  props: {
    showButton: {
      type: Boolean,
      default: true, // По умолчанию кнопка видна
    },
  },
  emits: ["details-click"],
};
</script>



<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-card.scss';
</style>  
