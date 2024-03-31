<script setup>
    import Panel from './Panel.vue';
</script>
<template>
    <h2>Hello .NET Core with Vite integrated</h2>

    <Panel title="Message Title">
        Message Shows Here

        <template #footer>
            This is footer info
        </template>
    </Panel>

    <Panel title="Message 2">
        Message without footer slot info
    </Panel>

</template>