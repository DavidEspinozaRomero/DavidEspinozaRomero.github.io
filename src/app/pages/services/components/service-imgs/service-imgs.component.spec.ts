import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceImgsComponent } from './service-imgs.component';

describe('ServiceImgsComponent', () => {
  let component: ServiceImgsComponent;
  let fixture: ComponentFixture<ServiceImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ServiceImgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
