<script setup>
import UIButton from './ui/UIButton.vue';
import UILink from './ui/UILink.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  formFields: {
    type: Object,
    default: () => ({
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
    })
  },
});
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__info">
          <div class="footer__brand">
            <logoIcon size="60" />
            <span class="footer__logo">
              Redmine
              <span class="footer__logo-part">
                Kanban
              </span>
            </span>
          </div>
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
              label="support@redmine-kanban.com"
              theme="white"
            />
          </div>
        </div>
        <div class="footer__form">
          <h2 class="footer__form-title">
            {{
            `Our plugins will help you stay organized and
            ensure that all necessary tasks are completed
            throughout the project lifecycle.`
            }}
          </h2>
          <h3 class="footer__form-description description">
            {{ 'Fill out the form and we will contact you' }}
          </h3>
          <form class="footer__form-container ">
            <div class="footer__form-container__group">
              <input
                type="text"
                class="footer__form-input"
                :placeholder="formFields.name.placeholder"
              >
            </div>
            <div class="footer__form-container__group">
              <input
                type="email"
                class="footer__form-input"
                :placeholder="formFields.email.placeholder"
              >
            </div>
            <div class="footer__form-container-group">
                <select class="footer__form-select footer__form-input">
                  <option value="" disabled selected>
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
                <triangleIcon class="footer__form-select" />
            </div>
            <div class="footer__form-group">
              <textarea 
                class="footer__form-textarea"
                :placeholder="formFields.text.placeholder"
              />
            </div>
            <UIButton
              label="Send" 
              class="footer__form-button" 
              theme="blue"
            >
              <template #icon >
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
