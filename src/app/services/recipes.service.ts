import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {Recipe} from "../model/recipe/recipe";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  headers = new HttpHeaders().set("X-API-KEY", "HoA")

  constructor(private httpClient: HttpClient) { }



  /**
   * Get all recipes from BE
   */
  getAllRecipe(): Observable<Recipe[]> {
    return this.httpClient
      .get<Recipe[]>(`recipe`,{headers: this.headers})
      .pipe(shareReplay(1, 6000))
  }

  /**
   * Send new recipe to BE
   */
  postNewRecipe(body: FormGroup): Observable<Recipe> {
    return this.httpClient
      .post<Recipe>(`recipe`, JSON.stringify(body), {headers: this.headers});
  }

  /**
   * Edit recipe
   */
  editRecipe(id: string, body: Recipe): Observable<Recipe> {
    return this.httpClient
      .post<Recipe>(`recipe/${id}`, body, {headers: this.headers});
  }

  /**
   * Show recipe detail
   */
  showRecipeDetail(id: string): Observable<any> {
    return this.httpClient
      .get<any>(`recipe/${id}`,{headers: this.headers});
  }
  /**
   * Delete recipe from BE
   */
  deleteRecipe(id: string | undefined): Observable<any> {
    return this.httpClient
      .delete<any>(`recipe/${id}`, {headers: this.headers});
  }
}
