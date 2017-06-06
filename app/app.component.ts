import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <h1>Recipe Box</h1>
  <ul [class]='difficultyColor(currentRecipe)' *ngFor = 'let currentRecipe of recipes'  (click)='haveCooked(currentRecipe)'>
    <li>{{currentRecipe.title}}</li>
    <ul>
      <li>Ingredients: {{currentRecipe.ingredients}}</li>
      <li>Directions: {{currentRecipe.directions}}</li>
      <li>Difficulty: {{currentRecipe.difficulty}}</li>
      <li>Cooked?: {{currentRecipe.cooked}}</li>
    </ul>
    <button (click)='editRecipe(currentRecipe)'>Edit</button>
  </ul>

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
  recipes: Recipe[] = [
    new Recipe('Pizza', ['pepperoni', 'cheese', 'dough'], 'bake it', 2),
    new Recipe('Tacos', ['ground beef', 'tortillas', 'cheese'], 'put it together', 3)
  ];
  selectedRecipe = null;

  editRecipe(selectedRecipe) {
    this.selectedRecipe = selectedRecipe;
  }

  haveCooked(clickedRecipe: Recipe) {
    console.log(clickedRecipe)
   if(clickedRecipe.cooked === 'true') {
     alert("This recipe has been cooked!");
   } else {
     alert("This recipe has not been tried, test it out!");
   }
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

  finishedEditing() {
    this.selectedRecipe = null;
  }

  public cookedStatus = [
    {value: true, display: 'tried'},
    {value: false, display: 'have not tried'}
  ];

}

export class Recipe {
  public cooked: string = 'false';
  constructor(public title: string, public ingredients: String[], public directions: string, public difficulty: number) {}
}
