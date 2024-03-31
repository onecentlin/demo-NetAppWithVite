<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        title: String
    });
</script>
<template>
    <div class="card bg-gradient my-3">
        <h4 class="card-header">{{ props.title }}</h4>
        <div class="card-body">
            <slot></slot>
        </div>
        <div class="card-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>