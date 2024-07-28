import { Component } from '@angular/core';
import { AnualData } from '../../types/anualData';
import { CommonModule } from '@angular/common';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-investments-result',
  templateUrl: './investments-result.component.html',
  styleUrl: './investments-result.component.css',
})
export class InvestmentsResultComponent {
  constructor(private readonly investmentService: InvestmentService) {}

  get results(): AnualData[] | undefined {
    return this.investmentService.resultData;
  }
}
