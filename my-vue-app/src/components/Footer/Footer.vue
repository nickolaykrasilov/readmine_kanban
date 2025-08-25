<script setup>

import UILink from '../ui/UILink.vue';

import Logo from '../Logo.vue';
import FooterForm from './FooterForm.vue';
</script>

<template>
  <footer class="footer">
    <div class="footer__content">
        <Logo size="60" />
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
      <FooterForm
        :title="`
          Our plugins will help you stay organized and
          ensure that all necessary tasks are completed
          throughout the project lifecycle.`"
        :description="'Fill out the form and we will contact you'"
      />
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/footer/footer.scss';
</style>
