import { Injectable } from '@angular/core';
import { Extension } from 'core';
import { ApplicationService, APPLICATION_SERVICE } from 'shared';

@Extension(APPLICATION_SERVICE,'US_3_3',[])
@Injectable()
export class Us33ApplicationService implements ApplicationService {

  constructor() { }

  isValidApplicationName(appName: string): boolean {
    return appName.startsWith('us33');
  }
 
}
