import { Component, OnInit, Injector } from '@angular/core';
import { PluginManager } from 'core'
import { ApplicationService, APPLICATION_SERVICE } from 'shared';
import { DtdPluginManager } from 'projects/shared/src/public_api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DtdPluginManager]
})
export class AppComponent implements OnInit {
  appName: string = '';
  dtd: string = "US_2_01";
  isValid: string = '';
  ngOnInit(): void {
    console.log(this.pluginManager.getProviders());
  }
  title = 'app';
  constructor(private injector: Injector,private pluginManager: DtdPluginManager) {    
   
  }

  verifyAppName(){
    var applicationService = this.pluginManager.getService<ApplicationService>(APPLICATION_SERVICE, this.dtd);
    if(applicationService){
      this.isValid = '' + applicationService.isValidApplicationName(this.appName);
    } else {
      this.isValid = 'There is no implemented service';
    }
  }
}
