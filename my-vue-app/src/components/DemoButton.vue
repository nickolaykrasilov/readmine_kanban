<template>
  <button class="demo-btn">
    <span class="demo-btn__text">Get a Free Demo</span>
  </button>
</template>

<script setup>
</script>

<style lang="scss">
.demo-btn {
  width: 160px;
  height: 46px;
  background: #0094FF;
  border: none;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  transition: background 0.2s ease;
  padding: 0;
  overflow: hidden;

  &:hover {
    background: #007acc;
  }

  &__text {
    position: absolute;
    width: 113px;
    height: 17px;
    top: 14px;
    left: 23px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
}
</style>