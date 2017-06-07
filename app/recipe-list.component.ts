import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template: `
  <ul *ngFor = 'let currentRecipe of childRecipeList' (click)='haveCooked(currentRecipe)'>
    <li [class]='difficultyColor(currentRecipe)'>{{currentRecipe.title}}</li>
    <ul>
      <li>Ingredients: {{currentRecipe.ingredients}}</li>
      <li>Directions: {{currentRecipe.directions}}</li>
      <li [class]='difficultyColor(currentRecipe)'>Difficulty: {{currentRecipe.difficulty}}</li>
      <li>Cooked?: {{currentRecipe.cooked}}</li>
    </ul>
    <button (click)='editRecipe(currentRecipe)'>Edit</button>
  </ul>
  `
})

export class RecipeListComponent {
   @Input() childRecipeList: Recipe[];

  difficultyColor(currentRecipe){
    if (currentRecipe.difficulty === 3){
      return "bg-danger";
    } else if (currentRecipe.difficulty === 2) {
      return  "bg-warning";
    } else {
      return "bg-success";
    }
  }

  haveCooked(clickedRecipe: Recipe) {
    console.log(clickedRecipe)
   if(clickedRecipe.cooked === 'true') {
     alert("This recipe has been cooked!");
   } else {
     alert("This recipe has not been tried, test it out!");
   }
 }


}
