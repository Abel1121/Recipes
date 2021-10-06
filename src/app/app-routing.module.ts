import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from "./components/main-container/main-container.component";
import { ViewRecipeComponent } from "./components/view-recipe/view-recipe.component";
import { DetailsPageComponent } from "../../../frontend-task/list-app/src/app/details-page/details-page.component";

const routes: Routes = [
  { path: '', component: MainContainerComponent},
  { path: 'view', component: ViewRecipeComponent },
  { path: `view/:id`, component: ViewRecipeComponent },
  { path: 'details', component: DetailsPageComponent },
  { path: 'details/:id', component: DetailsPageComponent }


  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
