import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcbuttonComponent } from './calcbutton';

describe('CalcbuttonComponent', () => {
  let component: CalcbuttonComponent;
  let fixture: ComponentFixture<CalcbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
