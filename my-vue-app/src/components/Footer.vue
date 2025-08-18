<script setup>
import UIButton from './ui/UIButton.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Redmine Kanban'
  },
  email: {
    type: String,
    default: 'support@redmine-kanban.com'
  },
  formFields: {
    type: Object,
    default: () => ({
      name: { placeholder: 'Name' },
      email: { placeholder: 'Email' },
      type: { 
        options: ['Option 1', 'Option 2', 'Option 3'],
        placeholder: 'Type' 
      },
      text: { placeholder: 'Text' }
    })
  },
  formTitle: {
    type: String,
    default: 'Fill out the form and we will contact you'
  },
  pluginsDescription: {
    type: String,
    default: 'Our plugins will help you stay organized and ensure that all necessary tasks are completed throughout the project lifecycle.'
  }
});
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__info">
          <div class="header__brand">
            <logoIcon class="header__logo-icon" />
            <span class="header__logo">
              Redmine
              <span class="header__logo-part">Kanban</span>
            </span>
          </div>
          
          <div class="footer__links">
            <a href="#" class="footer__link">Privacy Policy</a>
            <a href="#" class="footer__link">Contacts</a>
            <a href="#" class="footer__link">Terms and Conditions</a>
            <a :href="`mailto:${email}`" class="footer__email">{{ email }}</a>
          </div>
        </div>

        <div class="footer__form">
          <h3 class="footer__form-description">{{ pluginsDescription }}</h3>
          <h4 class="footer__form-title">{{ formTitle }}</h4>
          
          <form class="form">
            <div class="form__group">
              <input 
                type="text" 
                class="form__input" 
                :placeholder="formFields.name.placeholder"
              >
            </div>
            
            <div class="form__group">
              <label class="form__label">Email</label>
              <input 
                type="email" 
                class="form__input" 
                :placeholder="formFields.email.placeholder"
              >
            </div>
            
            <div class="form__group">
              <label class="form__label">Type</label>
              <select class="form__select">
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
              <label class="form__label">Text</label>
              <textarea 
                class="form__textarea" 
                :placeholder="formFields.text.placeholder"
              ></textarea>
            </div>
            
            <UIButton 
              type="submit" 
              label="Send" 
              class="form__submit" 
            />
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/styles/components/footer.scss';
</style>
