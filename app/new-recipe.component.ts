import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
    <h1>New Recipe</h1>

     <div>
       <label>Enter Recipe Title:</label>
       <input #newTitle>
     </div>
     <div>
       <label>Enter Ingredients:</label>
       <input #newIngredients>
     </div>
     <div>
       <label>Enter Directions:</label>
       <input #newDirections>
     </div>
     <div>
      <label>Recipe Difficulty:</label>
      <select #newDifficulty>
        <option [value]="1"> Low </option>
        <option [value]="2"> Medium </option>
        <option [value]="3"> High </option>
      </select>
      <button (click)="submitForm(newTitle.value, newIngredients.value, newDirections.value, newDifficulty.value); newTitle.value=''; newIngredients.value=''; newDirections.value='';">Add</button>
      </div>
  `
})

export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, ingredients: String[], directions: string, difficulty: number) {
    var newRecipeToAdd: Recipe = new Recipe(title, ingredients, directions, difficulty);
    this.newRecipeSender.emit(newRecipeToAdd);

  }
}
