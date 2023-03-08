import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesFollowComponent } from './eyes-follow.component';

describe('EyesFollowComponent', () => {
  let component: EyesFollowComponent;
  let fixture: ComponentFixture<EyesFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EyesFollowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyesFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
