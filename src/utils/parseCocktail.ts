import type { Cocktail, RawCocktail } from '@/types/cocktail';

export function parseCocktail(raw: RawCocktail): Cocktail {
  return {
    idDrink: raw.idDrink,
    strDrink: raw.strDrink,
    strDrinkThumb: raw.strDrinkThumb,
    strCategory: raw.strCategory,
    strAlcoholic: raw.strAlcoholic,
    strGlass: raw.strGlass,
    strInstructions: raw.strInstructions,
    ...Object.fromEntries(
      Array.from({ length: 15 }).flatMap((_, i) => {
        const n = i + 1;
        return [
          [`strIngredient${n}`, raw[`strIngredient${n}`] ?? null],
          [`strMeasure${n}`, raw[`strMeasure${n}`] ?? null],
        ];
      })
    ),
  };
}
