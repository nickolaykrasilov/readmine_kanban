<script setup>
import {validateButtonType} from '../../models/ButtonTypes'; 

defineProps({
    label: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String,
        default: 'button',
        validator: validateButtonType,
    },
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
    alert('Вы кликнули на кнопку!');
    emit('click', event);
};
</script>

<template>
    <button
        class="ui-button"
        :class="{ 'is-disabled': disabled, 'has-icon-right': iconRight }"
        :type="type"
        :disabled="disabled"
        @click="handleClick"
    >
        <template v-if="label">
            <span v-html="label" />
        </template>
        <template v-else>
            <slot />
        </template>
        <span 
            v-if="$slots.icon"
            class="ui-button__icon"
        >
            <slot name="icon" />
        </span>
    </button>
</template>

<style lang="scss" scoped>
@use '../../assets/styles/components/ui/ui-button.scss';
</style>
