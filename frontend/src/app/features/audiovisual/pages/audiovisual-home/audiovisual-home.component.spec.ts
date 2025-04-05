import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiovisualHomeComponent } from './audiovisual-home.component';

describe('AudiovisualHomeComponent', () => {
  let component: AudiovisualHomeComponent;
  let fixture: ComponentFixture<AudiovisualHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudiovisualHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiovisualHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
