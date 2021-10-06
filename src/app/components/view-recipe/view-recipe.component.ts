import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../../model/recipe/recipe";
import {RecipesService} from "../../services/recipes.service";
import {ActivatedRoute, Router, RoutesRecognized} from "@angular/router";

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

  recipe = this.fb.group({
    name: this.fb.control('',
      [
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ]
    ),
    preparation: this.fb.control('', Validators.required),
    description: this.fb.control('',
      [
        Validators.minLength(15),
        Validators.maxLength(255),
        Validators.required
      ]
    ),
    ingredient: []
  });
  edit: boolean = false
  ingredient = this.fb.group({
    name: this.fb.control('', Validators.required),
    quantity: this.fb.control('', Validators.required),
  })
  ingredientArrays: AbstractControl[]=[];

  recipeName = this.recipe.get('name');
  recipePreparation = this.recipe.get('preparation');
  recipeDescription = this.recipe.get('description');
  recipeIngredient = this.recipe.get('ingredient') as FormArray;
  ingredientName = this.ingredient.get('name');
  ingredientQuantity = this.ingredient.get('quantity');


  constructor(private fb: FormBuilder,
              private recipesService: RecipesService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    if (this.route.snapshot.children[0].params.id !== undefined) {
      this.edit = true;
      this.recipesService.showRecipeDetail(this.route.snapshot.children[0].params.id).subscribe(value => {
        this.recipe.setValue({
          name: value.name,
          preparation: value.preparation,
          description: value.description,
          ingredient: value.ingredient,
        })
        this.ingredientArrays = value.ingredient
      })
    }
  }

  addIngredient() {
    this.ingredientArrays.push(this.ingredient.value);
    this.recipeIngredient.setValue(this.ingredientArrays);
  }

  deleteItem(e: number) {
    this.ingredientArrays.splice(e,1);
    this.recipeIngredient.setValue(this.ingredientArrays);
  }

  sendForm() {
    this.recipesService.postNewRecipe(this.recipe.value).subscribe(value => {console.log(value)})
  }
}
