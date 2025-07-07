<script setup>
import logo from '../assets/images/logo.png'
import userIcon from '../assets/icons/people.png'
import DemoButton from './DemoButton.vue'
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="logo" alt="Logo" class="header__logo-img">
      </div>

      <nav class="header__nav">
        <div class="header__dropdown">
          <select class="header__dropdown-select">
            <option>Plugins</option>
            <option>Plugin 1</option>
            <option>Plugin 2</option>
          </select>
        </div>
        
        <div class="header__dropdown">
          <select class="header__dropdown-select">
            <option>Themes</option>
            <option>Theme 1</option>
            <option>Theme 2</option>
          </select>
        </div>
        
        <div class="header__dropdown">
          <select class="header__dropdown-select">
            <option>Pricing</option>
            <option>Basic</option>
            <option>Pro</option>
          </select>
        </div>
        
        <a href="#" class="header__nav-link">Resources</a>
      </nav>

      <div class="header__controls">
        <a href="#" class="header__nav-link">Support</a>
        <div class="header__lang-switcher">
          <select class="header__lang-select">
            <option>En</option>
            <option>Ru</option>
          </select>
        </div>
        <a href="#" class="header__login-link">
          <span class="header__login-text">Login</span>
          <img :src="userIcon" alt="User" class="header__login-icon">
        </a>
        <DemoButton class="header__demo-btn" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  background: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  &__logo-img {
    height: 40px;
    width: auto;
  }

  &__nav {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  &__dropdown {
    &-select {
      padding: 0.5rem 1rem;
      border: 1px solid #3D3D3D;
      border-radius: 4px;
      font-weight: 500;
      color: #333;
      cursor: pointer;
      background-color: white;
      min-width: 100px;
      transition: all 0.2s ease;

      &:hover {
        border-color: #0066ff;
        color: #0066ff;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 102, 255, 0.2);
      }
    }
  }

  &__nav-link {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: #0066ff;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__lang-select {
    padding: 0.5rem 1rem;
    border: 1px solid #3D3D3D;
    border-radius: 4px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    background-color: white;
    min-width: 60px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #0066ff;
    }
  }

  &__login {
    &-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }

    &-text {
      color: #0094FF;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 100%;
    }

    &-icon {
      width: 16px;
      height: 16px;
    }
  }
}
</style>