import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calcolatrice } from './calcolatrice';

describe('Calcolatrice', () => {
  let component: Calcolatrice;
  let fixture: ComponentFixture<Calcolatrice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calcolatrice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Calcolatrice);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
