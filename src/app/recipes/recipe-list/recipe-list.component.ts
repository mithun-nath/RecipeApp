import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [
new Recipe('Carrot Halwa', 'Made with carrot and sugar', 'https://static.pexels.com/photos/221146/pexels-photo-221146.png'),
new Recipe('Almond Shake', 'Made with Almonds and sugar', 'https://static.pexels.com/photos/221146/pexels-photo-221146.png')
];


  constructor() { }

  ngOnInit() {
  }

}
