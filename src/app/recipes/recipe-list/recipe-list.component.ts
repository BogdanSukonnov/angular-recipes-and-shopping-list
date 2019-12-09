import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test', 'https://cdn.loveandlemons.com/wp-content/uploads/2017/10/IMG_0071.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
