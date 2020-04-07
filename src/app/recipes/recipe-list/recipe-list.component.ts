import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Description', 'https://www.gourmet.cl/wp-content/uploads/2019/04/Arroz-chaufa-edit-2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
