import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetaisComponent } from './item-detais.component';

describe('ItemDetaisComponent', () => {
  let component: ItemDetaisComponent;
  let fixture: ComponentFixture<ItemDetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
