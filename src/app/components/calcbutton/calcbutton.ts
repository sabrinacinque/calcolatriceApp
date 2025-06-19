import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'calcbutton',
  standalone: true,
  imports: [],
  template: `
    <button class="btn btn-primary w-100 mb-2" (click)="clickBtn()">
      {{ val }}
    </button>
  `,
  styleUrls: ['./calcbutton.css']
})
export class CalcbuttonComponent {
  @Input() val!: string;
  @Output() buttonClicked = new EventEmitter<string>();

  clickBtn() {
    this.buttonClicked.emit(this.val);
  }
}
