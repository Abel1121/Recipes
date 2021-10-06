import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

class DialogData {
}

@Component({
  selector: 'app-sure-dialog',
  templateUrl: './sure-dialog.component.html',
  styleUrls: ['./sure-dialog.component.scss']
})
export class SureDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


  ngOnInit(): void {
  }

}
