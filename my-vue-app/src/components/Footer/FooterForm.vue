<script setup>
import { ref } from 'vue';
import { CONTACT_FORM_OPTIONS } from '../../models/ContactFormOptions';

import UIButton from '../ui/UIButton.vue';
import UIInput from '../ui/UIInput.vue';
import UISelect from '../ui/UISelect.vue';
import UITextarea from '../ui/UITextarea.vue';

const formData = ref({
  name: '',
  email: '',
  type: '',
  text: '',
});

</script>

<template>
  <div class="footer__form">
    <h2 class="footer__form-title">
      Our plugins will help you stay organized and
      ensure that all necessary tasks are completed
      throughout the project lifecycle.
    </h2>
    <p3 class="footer__form-description description">
      Fill out the form and we will contact you
    </p3>
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
        :options="CONTACT_FORM_OPTIONS"
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
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/footer/footer-form.scss';
</style>
