import { Injectable, Inject } from '@angular/core';
import { Extension } from 'core';
import { 
  AUTO_RENAME_SERVICE, 
  APPLICATION_SERVICE, 
  ApplicationService, 
  AutoRenameService 
} from 'shared';

@Extension(AUTO_RENAME_SERVICE,'US_3_3',[APPLICATION_SERVICE])
@Injectable()
export class Us33AutoRenameService extends AutoRenameService {

  constructor(@Inject(APPLICATION_SERVICE) private appService: ApplicationService) {
    super();
  }

  getNewName(appName: string): string {
    if(this.appService.isValidApplicationName(appName)){
      return appName;
    } else {
      return 'us33-' + appName
    }
  }


}
