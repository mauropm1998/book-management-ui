<template>
    <main>
        <NavBase />
        <RouterView></RouterView>
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBase from './components/NavBase.vue';
</script>