import { Component } from '@angular/core';
import { AnualData } from '../../types/anualData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  results: AnualData[] = [];

  onCalculateInvestmentResult(data: AnualData[]): void {
    this.results = data;
  }
}
