import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/root/app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { InvestmentsResultComponent } from './components/investments-result/investments-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    InvestmentsResultComponent,
  ],
  imports: [CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
