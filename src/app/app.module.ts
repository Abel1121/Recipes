import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorDialogComponent } from './components/navbar/author-dialog/author-dialog.component';
import { ViewRecipeComponent } from './components/view-recipe/view-recipe.component';
import { DetailsRecipeComponent } from './components/details-recipe/details-recipe.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IngrementDetailComponent } from './components/view-recipe/ingrement-detail/ingrement-detail.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { SureDialogComponent } from './components/list/sure-dialog/sure-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContainerComponent,
    ListComponent,
    AuthorDialogComponent,
    ViewRecipeComponent,
    DetailsRecipeComponent,
    IngrementDetailComponent,
    ListItemComponent,
    SureDialogComponent
  ],
  imports: [
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
