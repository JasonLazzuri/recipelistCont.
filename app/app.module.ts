import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { RecipeListComponent }  from './recipe-list.component';

@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent, RecipeListComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
