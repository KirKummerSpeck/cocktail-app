<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue';
</script>

<template>
  <VApp>
    <div class="wrapper">
      <div class="content">
        <NavMenu />
        <NuxtPage />
      </div>
    </div>
  </VApp>
</template>
<style scoped lang="scss">
.wrapper {
  max-width: 1024px;
  min-width: 360px;
  box-sizing: border-box;
}

.content {
  display: flex;
  min-height: 100vh;
  height: 100%;
  margin-left: $menu-width-desktop;

  @media (max-width: 480px) {
    margin-left: $menu-width-mobile;
  }
}
</style>
