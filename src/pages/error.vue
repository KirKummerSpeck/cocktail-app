<script setup lang="ts">
defineProps<{ error: { statusCode: number; message: string } }>();
</script>
<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <NuxtLink to="/">На главную</NuxtLink>
  </div>
</template>
