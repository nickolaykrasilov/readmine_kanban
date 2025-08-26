<script setup>
import UILink from '../ui/UILink.vue';
import Logo from '../Logo.vue';
import FooterForm from './FooterForm.vue';
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
      <Logo />
      <div class="footer__links">
        <UILink
          href="#"
          label="Privacy Policy"
          theme="white"
        />
        <UILink
          href="#"
          label="Contacts"
          theme="white"
        />
        <UILink
          href="#"
          label="Terms and Conditions"
          theme="white"
        />
        <UILink
          :href="`mailto:${email}`"
          :label="'support@redmine-kanban.com'"
          theme="white"
        />
      </div>
    </div>
      <FooterForm />
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/footer/footer.scss';
</style>
