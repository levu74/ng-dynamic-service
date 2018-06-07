import { NgModule } from '@angular/core';
import { Us33Component } from './us33.component';
import { Us33ApplicationService } from './services/us33-application.service';

@NgModule({
  imports: [
  ],
  declarations: [Us33Component],
  exports: [Us33Component],
  providers: [Us33ApplicationService]
})
export class Us33Module { }
