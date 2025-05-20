import { defineStore } from 'pinia';
import { parseCocktail } from '@/utils/parseCocktail';
import type { Cocktail, RawCocktail } from '@/types/cocktail';

export const useCocktailStore = defineStore('cocktails', () => {
  const config = useRuntimeConfig();
  const cocktails = ref<Record<string, Cocktail[]>>({});
  const loading = ref(false);
  const error = ref<string | null>(null);

  const url = `${config.public.apiBaseCocktail}/${config.public.apiBaseCocktailVersion}/search.php?s=`;

  async function fetchCocktails(code: string): Promise<void> {
    if (cocktails.value[code]) return;

    loading.value = true;
    error.value = null;

    try {
      const data = await $fetch<{ drinks: RawCocktail[] | null }>(`${url}${code}`);

      if (!data.drinks || data.drinks.length === 0) {
        throw new Error('Коктейли не найдены');
      }

      cocktails.value[code] = data.drinks.map(parseCocktail);
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message || 'Ошибка при получении данных';
      } else {
        error.value = String(err);
      }
    } finally {
      loading.value = false;
    }
  }

  return {
    cocktails,
    loading,
    error,
    fetchCocktails,
  };
});
