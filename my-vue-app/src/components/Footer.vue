<script setup>
import { ref } from 'vue';
import Logo from './Logo.vue';
import UIButton from './ui/UIButton.vue';
import UILink from './ui/UILink.vue';
import UIInput from './ui/UIInput.vue';
import UISelect from './ui/UISelect.vue';
import UITextarea from './ui/UITextarea.vue';

const formData = ref({
  name: '',
  email: '',
  type: '',
  text: '',
});

const email = 'support@redmine-kanban.com'
const title = 'Our plugins will help you stay organized'
const description = 'Fill out the form and we will contact you'

function handleSubmit() {
  console.log('Submit:', formData.value);
}
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
        <div class="footer__form">
          <h2 class="footer__form-title">
            {{ title }}
          </h2>
          <h3 class="footer__form-description description">
            {{ description }}
          </h3>
          <form 
            class="footer__form-container"
            @submit.prevent="handleSubmit"
          >
            <UIInput
              v-model="formData.name"
              placeholder="Name"
              type="text"
            />
            <UIInput
              v-model="formData.email"
              placeholder="Email"
              type="email"
            />
            <UISelect 
              v-model="formData.type"
              placeholder="Type"
              :options="[
                'Option 1',
                'Option 2',
                'Option 3',
              ]"
              class="footer__form-input"
            />
            <UITextarea
              v-model="formData.text"
              placeholder="Text"
            />
            <UIButton
              label="Send"
              theme="blue"
              class="footer__form-button"
            >
              <template #icon>
                <whiteArrowIcon />
              </template>
            </UIButton>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/styles/components/footer.scss';
</style>
