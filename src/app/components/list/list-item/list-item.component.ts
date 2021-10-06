import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SureDialogComponent} from "../sure-dialog/sure-dialog.component";
import {RecipesService} from "../../../services/recipes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../../model/recipe/recipe";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() item: any;
  constructor(public dialog: MatDialog,
              private recipesService: RecipesService,
              private router: Router) {}

  deleteItem(item: Recipe) {
    const dialogRef = this.dialog.open(SureDialogComponent, {
      data: item.name
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recipesService.deleteRecipe(item._id).subscribe(value => console.log('delete', value))
      }
    });
  }
  viewItem(item: Recipe) {
    this.router.navigate([`/details/${item._id}`])
  }
}
