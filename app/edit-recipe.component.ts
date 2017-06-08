import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'edit-recipe',
  template: `
    <div *ngIf="childSelectedRecipe">
      <h4>Edit Recipe</h4>
      <input type="radio" [(ngModel)]="childSelectedRecipe.difficulty" [value]="1">1 (Easy)<br>
      <input type="radio" [(ngModel)]="childSelectedRecipe.difficulty" [value]="2">2 (Medium)<br>
      <input type="radio" [(ngModel)]="childSelectedRecipe.difficulty" [value]="3">3 (Hard)

      <br>
      <label>Title: </label>
      <input type="text" [(ngModel)]="childSelectedRecipe.title">
      <br>
      <label>Ingredients: </label>
      <input type="text" [(ngModel)]="childSelectedRecipe.ingredients">
      <br>
      <label>Directions: </label>
      <input type="text" [(ngModel)]="childSelectedRecipe.directions">

      <div>
        <label>Have you tried this recipe?</label>
        <select [(ngModel)]='childSelectedRecipe.cooked'>
          <option *ngFor='let childSelectedRecipe of cookedStatus' [value]=childSelectedRecipe.value>
          {{childSelectedRecipe.display}}
          </option>
        </select>
      </div>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditRecipeComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  haveCooked(clickedRecipe: Recipe) {
    console.log(clickedRecipe)
   if(clickedRecipe.cooked === true) {
     alert("This recipe has been cooked!");
   } else {
     alert("This recipe has not been tried, test it out!");
   }
  }

  public cookedStatus = [
    {value: true, display: 'tried'},
    {value: false, display: 'have not tried'}
  ];
}
