import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWindowComponent } from './movie-window.component';

describe('MovieWindowComponent', () => {
  let component: MovieWindowComponent;
  let fixture: ComponentFixture<MovieWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
