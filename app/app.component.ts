import { Component } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Box</h1>
  <recipe-list [childRecipeList]="masterRecipeList"></recipe-list>
  <div *ngIf="selectedRecipe">
    <h4>Edit Recipe</h4>
    <input type="radio" [(ngModel)]="selectedRecipe.difficulty" [value]="1">1 (Easy)<br>
    <input type="radio" [(ngModel)]="selectedRecipe.difficulty" [value]="2">2 (Medium)<br>
    <input type="radio" [(ngModel)]="selectedRecipe.difficulty" [value]="3">3 (Hard)

    <div>
      <label>Have you tried this recipe?</label>
      <select [(ngModel)]='selectedRecipe.cooked'>
        <option *ngFor='let status of cookedStatus' [value]=status.value>
        {{status.display}}
        </option>
      </select>
    </div>

    <button (click)="finishedEditing()">Done</button>
  </div>
  `


})

export class AppComponent {
  masterRecipeList: Recipe[] = [
    new Recipe('Pizza', ['pepperoni', 'cheese', 'dough'], 'bake it', 2),
    new Recipe('Tacos', ['ground beef', 'tortillas', 'cheese'], 'put it together', 3)
  ];

  selectedRecipe = null;

  editRecipe(selectedRecipe) {
    this.selectedRecipe = selectedRecipe;
  }



  finishedEditing() {
    this.selectedRecipe = null;
  }

  public cookedStatus = [
    {value: true, display: 'tried'},
    {value: false, display: 'have not tried'}
  ];

}
