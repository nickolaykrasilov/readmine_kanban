<script setup>
defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: null
  },
  iconAlt: {
    type: String,
    default: ''
  },
  isLogin: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <router-link 
    :to="to" 
    :class="[
      'ui-link',
      { 'ui-link--login': isLogin }
    ]"
  >
    <span class="ui-link__text">
      {{ text }}
    </span>
    <img 
      v-if="icon" 
      :src="icon" 
      :alt="iconAlt" 
      class="ui-link__icon"
    >
  </router-link>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-link.scss';
</style>
