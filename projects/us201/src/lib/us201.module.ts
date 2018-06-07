import { NgModule } from '@angular/core';
import { Us201Component } from './us201.component';
import { Us201ApplicationService } from './services/us201-application.service';

@NgModule({
  imports: [
  ],
  declarations: [Us201Component],
  exports: [Us201Component],
  providers: [Us201ApplicationService]
})
export class Us201Module { }
