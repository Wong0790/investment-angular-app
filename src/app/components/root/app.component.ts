import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserInputComponent } from '../user-input/user-input.component';
import { InvestmentsResultComponent } from '../investments-result/investments-result.component';
import { AnualData } from '../../types/anualData';
import { InvestmentsResult } from '../../types/investmentsResult';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserInputComponent,
    InvestmentsResultComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  results: AnualData[] = [];

  onCalculateInvestmentResult(data: AnualData[]): void {
    this.results = data;
  }
}
