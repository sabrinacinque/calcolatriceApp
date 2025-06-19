import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calcbutton',
  standalone: true,
  imports: [],
  templateUrl: './calcbutton.html',
  styleUrls: ['./calcbutton.css']
})
export class CalcbuttonComponent {


  @Input() val!: number;

  @Output() OnRichiestaCambio = new EventEmitter<string>();
}
