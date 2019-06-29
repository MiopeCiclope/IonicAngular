import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];

  constructor(
      private recipesService: RecipesService,
      private router: Router
    ) {}

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewWillEnter(){
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(){
    console.log("Entred");
  }

  ionViewWillLeave(){
    console.log("Will Leave");
  }

  ngOnDestroy() {
    console.log("Destroied");
  }
}
