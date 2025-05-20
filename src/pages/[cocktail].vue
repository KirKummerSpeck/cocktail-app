<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCocktailStore } from '@/stores/cocktails';
import { type CocktailCode, cocktailCodes } from '@/constants/cocktailCodes';

const route = useRoute();
const code = route.params.cocktail as CocktailCode;

if (!cocktailCodes.includes(code)) {
  throw createError({
    statusCode: 404,
    message: 'Коктейль не найден',
  });
}

const cocktailStore = useCocktailStore();

await cocktailStore.fetchCocktails(code);

const cocktails = computed(() => cocktailStore.cocktails[code] || []);
</script>

<template>
  <div class="cocktail">
    <div v-if="cocktailStore.loading" class="loader-container">
      <VProgressCircular indeterminate color="primary" size="48" />
    </div>
    <div v-else>
      <CocktailCard v-for="(cocktail, index) in cocktails" :key="index" :drink="cocktail" />
    </div>
  </div>
</template>

<style scoped>
.cocktail {
  flex: 1;
  padding: 12px;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}
</style>
