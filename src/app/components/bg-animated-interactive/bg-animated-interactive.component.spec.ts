import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgAnimatedInteractiveComponent } from './bg-animated-interactive.component';

describe('BgAnimatedInteractiveComponent', () => {
  let component: BgAnimatedInteractiveComponent;
  let fixture: ComponentFixture<BgAnimatedInteractiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BgAnimatedInteractiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgAnimatedInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
