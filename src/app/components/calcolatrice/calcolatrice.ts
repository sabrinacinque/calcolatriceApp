import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display';
import { CalcbuttonComponent } from '../calcbutton/calcbutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calcolatrice',
  standalone: true,
  imports: [DisplayComponent, CalcbuttonComponent,CommonModule],
  templateUrl: './calcolatrice.html',
  styleUrls: ['./calcolatrice.css']
})
export class CalcolatriceComponent {
  numeri: any[] = ["+", "-", "*", "/",9, 8, 7, "=", 6, 5, 4, "C", 1, 2,3,".",0];

  cambiorosso(){

  }
}
