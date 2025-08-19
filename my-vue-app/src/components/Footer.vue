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
            >
            </UILink>
            <UILink
              href="#"
              label="Contacts"
              theme="white"
            </UILink>
            <UILink
              href="#"
              label="Terms and Conditions"
              theme="white"
            >
            </UILink>
            <UILink
              :href="`mailto:${email}`"
              label="support@redmine-kanban.com"
              theme="white"
              class="footer__email">
            </UILink>
          </div>
        </div>
        <div class="footer__form">
          <h2 class="footer__form-title ">{{ 
          `Our plugins will help you stay organized and
          ensure that all necessary tasks are completed
          throughout the project lifecycle.`
          }}</h2>
          <h3 class="footer__form-description description">
            {{ 'Fill out the form and we will contact you' }}
          </h3>
          <form class="form">
            <div class="form__group">
              <input 
                type="text"
                class="form__input form__input--underline"
                :placeholder="formFields.name.placeholder"
              >
            </div>
            <div class="form__group">
              <input
                type="email"
                class="form__input form__input--underline"
                :placeholder="formFields.email.placeholder"
              >
            </div>
            <div class="form__group">
                <select class="form__select form__input--underline">
                <option value="" disabled selected>{{ formFields.type.placeholder }}</option>
                <option 
                    v-for="(option, index) in formFields.type.options" 
                    :key="index"
                    :value="option"
                >
                    {{ option }}
                </option>
                </select>
            </div>
            <div class="form__group">
              <textarea 
                class="form__textarea" 
                :placeholder="formFields.text.placeholder"
              ></textarea>
            </div>
            <UIButton
              type="submit" 
              label="Send" 
              class="form__submit" 
              theme="blue"
            >
              <template #icon >
                <whiteArrowIcon class="form__submit-icon" />
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
