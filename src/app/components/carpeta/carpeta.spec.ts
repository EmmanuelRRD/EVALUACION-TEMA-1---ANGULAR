import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta } from './carpeta';

describe('Carpeta', () => {
  let component: Carpeta;
  let fixture: ComponentFixture<Carpeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carpeta],
    }).compileComponents();

    fixture = TestBed.createComponent(Carpeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
