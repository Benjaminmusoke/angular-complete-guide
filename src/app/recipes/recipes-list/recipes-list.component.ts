import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test', 'https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-black-background-suitable-card-typography-147082451.jpg')];
  constructor() { }


  ngOnInit(): void {
  }

}
