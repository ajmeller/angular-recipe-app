import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe.interface';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
})
export class FavoritesPageComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  favoriteList: Recipe[] = [];
  favoriteListEmpty: boolean = true;

  onEmpty(value: boolean) {
    this.favoriteListEmpty = value;
  }

  ngOnInit(): void {
    this.favoriteList = this.recipeService.favoriteList;
    this.favoriteListEmpty = this.favoriteList.length <= 0;
  }
}
