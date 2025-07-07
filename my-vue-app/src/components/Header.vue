<script setup>
import logo from '../assets/images/logo.png'
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <img :src="logo" alt="Logo" class="header__logo-image">
      </div>

      <nav class="header__nav">
        <a href="#" class="header__nav-link">Plugins</a>
        <a href="#" class="header__nav-link">Themes</a>
        <a href="#" class="header__nav-link">Pricing</a>
        <a href="#" class="header__nav-link">Resources</a>
        <a href="#" class="header__nav-link">Support</a>
      </nav>

      <div class="header__controls">
        <div class="header__lang">
          <select class="header__lang-select">
            <option>En</option>
            <option>Ru</option>
          </select>
        </div>
        <a href="#" class="header__login">Login</a>
        <button class="header__demo-button">Get a Free Demo</button>
      </div>
    </div>
  </header>
</template> 
