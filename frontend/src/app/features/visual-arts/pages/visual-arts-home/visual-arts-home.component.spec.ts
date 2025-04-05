import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualArtsHomeComponent } from './visual-arts-home.component';

describe('VisualArtsHomeComponent', () => {
  let component: VisualArtsHomeComponent;
  let fixture: ComponentFixture<VisualArtsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualArtsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualArtsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
