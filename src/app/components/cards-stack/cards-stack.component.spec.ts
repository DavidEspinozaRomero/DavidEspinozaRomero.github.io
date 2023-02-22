import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStackComponent } from './cards-stack.component';

describe('CardsStackComponent', () => {
  let component: CardsStackComponent;
  let fixture: ComponentFixture<CardsStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CardsStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
