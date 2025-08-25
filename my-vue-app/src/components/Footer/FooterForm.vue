<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import UIButton from '../ui/UIButton.vue';
import UIInput from '../ui/UIInput.vue';
import UISelect from '../ui/UISelect.vue';
import UITextarea from '../ui/UITextarea.vue';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  initialData: {
    type: Object,
    default: () => ({
      name: '',
      email: '',
      type: '',
      text: '',
    })
  },
  selectOptions: {
    type: Array,
    default: () => [
      'Option 1',
      'Option 2',
      'Option 3',
    ],
  }
});

const emit = defineEmits(['submit']);

const formData = ref({ ...props.initialData });

function handleSubmit() {
  emit('submit', formData.value);
}
</script>

<template>
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
        :options="selectOptions"
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
