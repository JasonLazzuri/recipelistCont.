import { Component } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe Box</h1>
      <recipe-list [childRecipeList]="masterRecipeList" (clickSender)="editRecipe($event)"></recipe-list>
      <hr>
      <edit-recipe [childSelectedRecipe]="selectedRecipe" (doneButtonClickedSender)="finishedEditing()"></edit-recipe>
      <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>
    </div>
  `
})

export class AppComponent {

  public cooked: string = 'false';
  masterRecipeList: Recipe[] = [
    new Recipe('Pizza', ['pepperoni', 'cheese', 'dough'], 'bake it', 2),
    new Recipe('Tacos', ['ground beef', 'tortillas', 'cheese'], 'put it together', 3)
  ];

  selectedRecipe = null;

  editRecipe(currentRecipe) {
    this.selectedRecipe = currentRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  addRecipe(newRecipeFromChild: Recipe) {
    this.masterRecipeList.push(newRecipeFromChild);
  }
}
