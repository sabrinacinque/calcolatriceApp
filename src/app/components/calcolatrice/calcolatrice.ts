// calcolatrice.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DisplayComponent } from '../display/display';
import { CalcbuttonComponent } from '../calcbutton/calcbutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calcolatrice',
  standalone: true,
  imports: [DisplayComponent, CalcbuttonComponent, CommonModule],
  templateUrl: './calcolatrice.html',
  styleUrls: ['./calcolatrice.css']
})
export class CalcolatriceComponent implements AfterViewInit {
  numeri: string[] = ["+", "-", "*", "/", "9", "8", "7", "=", "6", "5", "4", "C", "1", "2", "3", ".", "0"];

  // Usa una template reference variable invece di ViewChild diretto
  @ViewChild('displayRef') display!: DisplayComponent;

  ngAfterViewInit() {
    console.log('Display component inizializzato:', this.display);
  }

  gestisciInput(valore: string) {
    console.log('Valore cliccato:', valore, 'Display:', this.display);

    if (!this.display) {
      console.error('Display component non trovato!');
      return;
    }

    if (valore === 'C') {
      this.display.resetta();
    } else if (valore === '=') {
      try {
        this.display.number = eval(this.display.number).toString();
      } catch {
        this.display.number = 'Errore';
      }
    } else {
      this.display.aggiorna(valore);
    }
  }
}
