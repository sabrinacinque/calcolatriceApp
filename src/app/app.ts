import { Component } from '@angular/core';
import { CalcolatriceComponent } from './components/calcolatrice/calcolatrice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalcolatriceComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'P-01';
}
