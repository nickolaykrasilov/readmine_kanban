<script setup>
import { validateButtonType } from '../../models/ButtonTypes';

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
    iconRight: {
        type: Boolean,
        default: false,
    },
});

const handleClick = () => {
    alert("Click :) Have a nice day!");
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
            <span>
                {{ label }}
            </span>
        </template>
        <slot v-else />
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
