<script setup lang="ts">
import { computed } from 'vue';
import type { Cocktail } from '@/types/cocktail';

const MAX_INGREDIENTS = 15;

const props = defineProps<{ drink: Cocktail }>();

const ingredients = computed(() => {
  const result: string[] = [];
  for (let i = 1; i <= MAX_INGREDIENTS; i++) {
    const ingredient = props.drink[`strIngredient${i}` as keyof Cocktail];
    const measure = props.drink[`strMeasure${i}` as keyof Cocktail];
    if (ingredient) {
      result.push(`${measure || ''} ${ingredient}`.trim());
    }
  }
  return result;
});
</script>

<template>
  <VCard class="cocktail-card" elevation="2">
    <VRow no-gutters>
      <VCol cols="12" md="8" class="pa-4 info-col">
        <h2 class="title">{{ props.drink.strDrink }}</h2>
        <div class="meta">
          <p><strong>Category:</strong> {{ props.drink.strCategory }}</p>
          <p><strong>Type:</strong> {{ props.drink.strAlcoholic }}</p>
          <p><strong>Glass:</strong> {{ props.drink.strGlass }}</p>
        </div>

        <p v-if="props.drink.strInstructions" class="instructions">
          <strong>Instructions:</strong><br />
          {{ props.drink.strInstructions }}
        </p>

        <div v-if="ingredients.length">
          <p><strong>Ingredients:</strong></p>
          <ul class="ingredients">
            <li v-for="(item, index) in ingredients" :key="index">{{ item }}</li>
          </ul>
        </div>
      </VCol>

      <VCol cols="12" md="4" class="image-col">
        <VImg
          :src="props.drink.strDrinkThumb"
          :alt="props.drink.strDrink"
          aspect-ratio="1"
          cover
          loading="lazy"
          lazy-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2VlZScgLz4="
          class="drink-image"
        />
      </VCol>
    </VRow>
  </VCard>
</template>

<style scoped lang="scss">
.cocktail-card {
  margin-bottom: 24px;
  border-radius: 12px;
}

.image-col {
  min-height: 240px;
  display: flex;

  @media (max-width: 959px) {
    max-height: 180px;
    height: auto;
  }

  .drink-image {
    width: 100%;
    height: 100%;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    @media (max-width: 959px) {
      border-top-left-radius: 12px;
      border-bottom-left-radius: 0;
      border-top-right-radius: 12px;
    }
  }
}

.info-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.meta p {
  margin: 4px 0;
}

.instructions {
  margin-top: 12px;
  font-size: 0.95rem;
  line-height: 1.5;
}

.ingredients {
  padding-left: 1.2rem;
  margin-top: 4px;
}

.ingredients li {
  font-size: 0.9rem;
  margin-bottom: 2px;
}
</style>
