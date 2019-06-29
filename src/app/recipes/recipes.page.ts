import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];

  constructor(
      private recipesService: RecipesService,
      private router: Router
    ) {
      router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.refresh();
        }
      });
    }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}
