import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceIconsComponent } from './service-icons.component';

describe('ServiceIconsComponent', () => {
  let component: ServiceIconsComponent;
  let fixture: ComponentFixture<ServiceIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ServiceIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
