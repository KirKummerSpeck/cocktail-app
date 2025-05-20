<script setup lang="ts">
import { cocktailCodes } from '@/constants/cocktailCodes';
</script>

<template>
  <v-list nav class="cocktail-menu">
    <v-list-item v-for="code in cocktailCodes" :key="code" :to="`/${code}`" :exact="true" link>
      <v-list-item-title>{{ code }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">
.cocktail-menu {
  width: $menu-width-desktop;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #ddd;
  background-color: #f8f8f8;
  padding-top: 12px;

  @media (max-width: 480px) {
    width: $menu-width-mobile;
    font-size: 0.85rem;
  }
}
</style>
