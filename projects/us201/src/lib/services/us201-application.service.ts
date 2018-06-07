import { Injectable } from '@angular/core';
import { Extension } from 'core';
import { ApplicationService, APPLICATION_SERVICE } from 'shared';

@Extension(APPLICATION_SERVICE,'US_2_01',[])
@Injectable()
export class Us201ApplicationService implements ApplicationService {

  constructor() { }

  isValidApplicationName(appName: string): boolean {
    return appName.startsWith('us201');
  }
 
}
