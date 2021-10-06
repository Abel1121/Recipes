import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ingrement-detail',
  templateUrl: './ingrement-detail.component.html',
  styleUrls: ['./ingrement-detail.component.scss']
})
export class IngrementDetailComponent {
  @Input() value: any;
  @Input() index: any;
  @Output() deleteItem = new EventEmitter<number>()

  removeItem(index: number) {
    this.deleteItem.emit(index)
  }
}
