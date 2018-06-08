import { NgModule } from '@angular/core';
import { Us33Component } from './us33.component';
import { Us33ApplicationService } from './services/us33-application.service';
import { Us33AutoRenameService } from './services/us33-auto-rename.service';

@NgModule({
  imports: [
  ],
  declarations: [Us33Component],
  exports: [Us33Component],
  providers: [Us33ApplicationService, Us33AutoRenameService]
})
export class Us33Module { }
