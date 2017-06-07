import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allRecipes">All Recipes</option>
    <option value="completedRecipes">Completed Recipes</option>
    <option value="incompleteRecipes" selected="selected">Incomplete Recipes</option>
  </select>

  <ul>
    <li (click)="haveCooked(currentRecipe)" *ngFor="let currentRecipe of childRecipeList | completeness">{{currentRecipe.title}} {{currentRecipe.ingredients}} {{currentRecipe.directions}} {{currentRecipe.difficulty}}
      <input *ngIf="currentRecipe.cooked === true" type="checkbox" checked (click)="toggleCooked(currentRecipe, false)"/>
      <input *ngIf="currentRecipe.cooked === false" type="checkbox" (click)="toggleCooked(currentRecipe, true)"/>
      <button (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button>
    </li>
  </ul>
  `
})

export class RecipeListComponent {
   @Input() childRecipeList: Recipe[];
   @Output() clickSender = new EventEmitter();

   editButtonHasBeenClicked(currentRecipe: Recipe) {
       this.clickSender.emit(currentRecipe);
     }

  filterByCompleteness: string = "incompleteTasks";

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

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
