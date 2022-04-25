import { Injectable, EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import  { Recipe } from './recipe.model'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe (
      'pasta',
      'yummy',
      "https://www.takeaway.com/foodwiki/uploads/sites/11/2019/08/italian_cuisine_1-1080x985.jpg",
      [new Ingredient("pasta", 1), new Ingredient("sauce", 2)]),
    new Recipe (
      "cake",
      "gimme more",
      "https://th.bing.com/th/id/R.20a16590e4ecbbbdc811b7b41e10b75c?rik=4JgTJXx18%2bfvuA&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f110000%2fvelka%2fbirthday-cake-14229611534jv.jpg&ehk=ibyzYtz%2fy0nKAc4hfvzFCefoxClE1%2fcP44nel%2fHIIKo%3d&risl=&pid=ImgRaw&r=0",
      [new Ingredient("flour", 1), new Ingredient("sugar", 10)]),
    new Recipe (
      "fish",
      "delicious",
      "https://th.bing.com/th/id/OIP.Xn3FkMp1r__88bl56Z2xagHaEL?pid=ImgDet&rs=1",
      [new Ingredient("branzino", 1), new Ingredient("veges", 5)]),
  ];

  constructor(private shoppingService: ShoppingListService) { }

  public GetRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.AddIngredients(ingredients);
  }

}
