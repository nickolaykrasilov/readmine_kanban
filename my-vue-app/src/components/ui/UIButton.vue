<script setup>
const props = defineProps({
    label: {
        type: String,
        default: '',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    theme: {
        type: String,
        default: 'color_blue_and_white',
    },
    iconRight: {
        type: Boolean,
        default: false,
    },
});

const handleClick = () => {
    if (!props.disabled) {
        alert("Click :) Have a nice day!");
    };
};
</script>

<template>
    <button
        class="ui-button" 
        :class="[
            `ui-button--${theme}`,
            { 
                'is-disabled': disabled, 
                'has-icon-right': iconRight && $slots.icon 
            }
        ]"
        :disabled="disabled"
        @click="handleClick"
    >
        <template v-if="label">
            {{ label }}
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
