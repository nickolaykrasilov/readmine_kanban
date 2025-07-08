<script setup>
const props = defineProps({
  href: {
    type: String,
    default: '#'
  },
  active: {
    type: Boolean,
    default: false
  },
  mobile: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <a
    :href="href"
    class="nav-link"
    :class="{
      'nav-link--active': active,
      'nav-link--mobile': mobile
    }"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped>
.nav-link {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.5;
  transition: color 0.2s ease;

  &:hover {
    color: #0066ff;
  }

  &--active {
    color: #0066ff;
  }

  &--mobile {
    padding: 1rem;
    font-size: 18px;
  }
}
</style>