import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }
  allRecipes: any;
  loading: boolean = false;

  ngOnInit() {
    this.loading = true
    this.recipesService.getAllRecipe()
      .subscribe(value => {
      this.allRecipes = value
      this.loading = false;
      console.log(this.allRecipes)
    }, error => this.loading = false)
  }

}
