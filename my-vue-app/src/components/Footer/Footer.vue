<script setup>
import Logo from '../Logo.vue';
import UILink from '../ui/UILink.vue';
import FooterForm from './FooterForm.vue'; 

const email = 'support@redmine-kanban.com';
const title = 'Our plugins will help you stay organized';
const description = 'Fill out the form and we will contact you';
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__info">
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
              :label="email"
              theme="white"
            />
          </div>
        </div>
        
        <FooterForm
          :title="title"
          :description="description"
          @submit="handleFormSubmit"
        />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/footer/footer.scss';
</style>
