import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmNewPage } from './film-new.page';

describe('FilmNewPage', () => {
  let component: FilmNewPage;
  let fixture: ComponentFixture<FilmNewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
