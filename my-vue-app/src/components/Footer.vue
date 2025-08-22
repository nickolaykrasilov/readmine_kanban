<script setup>
import { ref } from 'vue';
import Logo from './Logo.vue';
import UIButton from './ui/UIButton.vue';
import UILink from './ui/UILink.vue';

const formData = ref({
  name: '',
  email: '',
  type: '',
  text: '',
})

const formFields = ref({
  name: {
    placeholder: 'Name',
  },
  email: {
    placeholder: 'Email',
  },
  type: {
    options: [
      'Option 1',
      'Option 2',
      'Option 3',
    ],
    placeholder: 'Type',
  },
  text: {
    placeholder: 'Text',
  },
});

const email = ref('support@redmine-kanban.com')
const title = ref('Our plugins will help you stay organized')
const description = ref('Fill out the form and we will contact you')
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
            <div class="footer__form-container__group">
              <input
                v-model="formData.name"
                type="text"
                class="footer__form-input"
                :placeholder="formFields.name.placeholder"
                required
              >
            </div>
            <div class="footer__form-container__group">
              <input
                v-model="formData.email"
                type="email"
                class="footer__form-input"
                :placeholder="formFields.email.placeholder"
                required
              >
            </div>
            <div class="footer__form-container-group">
              <select 
                v-model="formData.type"
                class="footer__form-select footer__form-input"
                required
              >
                <option value="" disabled>
                  {{ formFields.type.placeholder }}
                </option>
                <option
                  v-for="(option, index) in formFields.type.options"
                  :key="index"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
              <triangleIcon class="footer__form-select-icon" />
            </div>
            <div class="footer__form-group">
              <textarea
                v-model="formData.text"
                class="footer__form-textarea"
                :placeholder="formFields.text.placeholder"
                required
              ></textarea>
            </div>
            <UIButton
              type="submit"
              label="Send"
              class="footer__form-button"
              theme="blue"
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
