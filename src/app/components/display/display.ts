import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [],
  templateUrl: './display.html',
  styleUrls: ['./display.css']
})
export class DisplayComponent {
  number: string = '0';

  aggiorna(valore: string) {
    // Controllo per il punto decimale
    if (valore === '.') {
      // Verifica se c'è già un punto nel numero corrente
      if (this.number.includes('.')) {
        return; // Non aggiungere il punto se già presente
      }
    }

    if (this.number === '0' && valore !== '.') {
      this.number = valore;
    } else {
      this.number += valore;
    }
  }

  resetta() {
    this.number = '0';
  }
}
