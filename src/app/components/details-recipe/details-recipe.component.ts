import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipesService} from "../../services/recipes.service";

@Component({
  selector: 'app-details-recipe',
  templateUrl: './details-recipe.component.html',
  styleUrls: ['./details-recipe.component.scss']
})
export class DetailsRecipeComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute,
              private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    if (this.route.snapshot.children[0].params.id !== undefined) {
      this.recipesService.showRecipeDetail(this.route.snapshot.children[0].params.id).subscribe(value => {
        this.item = value;
      })
      console.log(this.item)
    }
  }
}
