<script setup>
import { UI_THEMES } from '../../models/UIThemes';
import UIButton from './UIButton.vue';

defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  buttonLabel: {
    type: String,
    default: 'Get a Free Demo',
  },
  theme: {
    type: String,
    default: UI_THEMES.GRADIENT_BLUE,
    validator: (value) => Object.values(UI_THEMES).includes(value),
  },
  width: {
    type: String,
    default: '1342px',
  },
  height: {
    type: String,
    default: '288px',
  },
  borderRadius: {
    type: String,
    default: '20px',
  },
});
</script>

<template>
  <div
    :class="[
      'ui-banner',
      `ui-banner--${theme}`,
    ]"
    :style="{
      width,
      height,
      borderRadius,
    }"
  >
    <div class="ui-banner__decoration ui-banner__decoration--left">
      <slot name="left-image" />
    </div>
    <div class="ui-banner__content">
      <h2 v-if="title || $slots.title" class="ui-banner__title">
        <slot v-if="$slots.title" name="title" />
        <template v-else>{{ title }}</template>
      </h2>
      <p v-if="description || $slots.description" class="ui-banner__description">
        <slot v-if="$slots.description" name="description" />
        <template v-else>{{ description }}</template>
      </p>
      <UIButton
        v-if="buttonLabel || $slots.button"
        :label="buttonLabel"
        class="ui-banner__button"
      >
        <template v-if="$slots.button" #icon>
          <slot name="button" />
        </template>
      </UIButton>
    </div>
    <div class="ui-banner__decoration ui-banner__decoration--right">
      <slot name="right-image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #4079EA 0%, #46C3E4 100%);

  &__content {
    text-align: center;
    z-index: 2;
    padding: 20px;
  }

  &__title {
    margin-bottom: 16px;
    font-size: 24px;
    color: white;
  }

  &__description {
    margin-bottom: 24px;
    color: rgba(255, 255, 255, 0.9);
  }

  &__decoration {
    position: absolute;
    z-index: 1;

    &--left {
      bottom: 0;
      left: 0;
    }

    &--right {
      top: 0;
      right: 0;
    }
  }

  /* Темы (пример) */
  &--gradient-blue {
    background: linear-gradient(90deg, #4079EA 0%, #46C3E4 100%);
  }

  &--gradient-purple {
    background: linear-gradient(90deg, #8A2BE2 0%, #FF00FF 100%);
  }
}
</style>