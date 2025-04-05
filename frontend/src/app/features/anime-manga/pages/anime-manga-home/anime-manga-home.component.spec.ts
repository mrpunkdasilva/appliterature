import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeMangaHomeComponent } from './anime-manga-home.component';

describe('AnimeMangaHomeComponent', () => {
  let component: AnimeMangaHomeComponent;
  let fixture: ComponentFixture<AnimeMangaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeMangaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeMangaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
