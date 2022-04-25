import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  listChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient("flour", 1),
    new Ingredient("sugar", 10),
  ];

  constructor() { }

  GetList(){
    return this.ingredients.slice();
  }

  AddIngredient (ing: Ingredient){
    this.ingredients.push(ing);
    this.listChanged.emit(this.ingredients.slice());
  }

  RemoveIngredient (ing: Ingredient){
    //this.ingredients.splice(ing);
    this.listChanged.emit(this.ingredients.slice());
  }

  ClearList(){
    this.ingredients = [];
    this.listChanged.emit(this.ingredients.slice());
  }

  AddIngredients (ings: Ingredient[]){
    this.ingredients.push(...ings);
    this.listChanged.emit(this.ingredients.slice());
  }
}
