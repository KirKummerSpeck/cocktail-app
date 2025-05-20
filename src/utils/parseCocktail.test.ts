import { parseCocktail } from '@/utils/parseCocktail';
import type { RawCocktail } from '@/types/cocktail';

describe('parseCocktail', () => {
  it('should correctly map raw cocktail to cocktail', () => {
    const raw: RawCocktail = {
      idDrink: '1',
      strDrink: 'Test Cocktail',
      strDrinkThumb: 'thumb.jpg',
      strCategory: 'Test Category',
      strAlcoholic: 'Alcoholic',
      strGlass: 'Glass',
      strInstructions: 'Shake well',
      strIngredient1: 'Vodka',
      strIngredient2: 'Orange Juice',
      strMeasure1: '50ml',
      strMeasure2: '100ml',
    };

    const result = parseCocktail(raw);

    expect(result.idDrink).toBe('1');
    expect(result.strDrink).toBe('Test Cocktail');
    expect(result.strIngredient1).toBe('Vodka');
    expect(result.strMeasure2).toBe('100ml');
    expect(result.strIngredient15).toBeNull();
  });
});
