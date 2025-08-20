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
    default: '',
  },
  theme: {
    type: String,
    default: UI_THEMES.WHITE,
    validator: (value) => Object.values(UI_THEMES).includes(value),
  },
});
</script>

<template>
  <div
    :class="[
      'ui-banner',
      `ui-banner--${theme}`,
    ]"
  >
    <div class="ui-banner__decoration">
      <slot name="left-image" />
    </div>
    <div>
      <h2
        v-if="title || $slots.title"
        class="ui-banner__title title"
      >
        <slot 
          v-if="$slots.title" 
          name="title"
        />
        <template v-else>
          {{ title }}
        </template>
      </h2>
      <p
      v-if="description || $slots.description"
      class="ui-banner__description description"
      >
        <slot 
          v-if="$slots.description"
          name="description"
        />
        <template v-else>
          {{description }}
        </template>
      </p>
      <UIButton
        v-if="buttonLabel || $slots.button"
        :label="buttonLabel"
        theme="white"
      >
        <template #icon>
          <whiteArrowIcon color="#222939" />
        </template>
      </UIButton>
    </div>
    <div class="ui-banner__decoration">
      <slot name="right-image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../assets/styles/components/ui/ui-banner.scss';
</style>
