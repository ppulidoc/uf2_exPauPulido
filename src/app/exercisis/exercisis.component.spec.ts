import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisisComponent } from './exercisis.component';

describe('ExercisisComponent', () => {
  let component: ExercisisComponent;
  let fixture: ComponentFixture<ExercisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
