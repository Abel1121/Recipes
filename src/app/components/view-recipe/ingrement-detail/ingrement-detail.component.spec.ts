import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngrementDetailComponent } from './ingrement-detail.component';

describe('IngrementDetailComponent', () => {
  let component: IngrementDetailComponent;
  let fixture: ComponentFixture<IngrementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngrementDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngrementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
