import { Extension, PluginManager } from 'core'
import { Injectable, Injector, InjectionToken } from '@angular/core';

@Injectable()
export class DtdPluginManager extends PluginManager { 
    constructor(private injector: Injector) {
        super();
    }

    getService<T>(serviceNameToken: InjectionToken<string>, dtdPluginName: string) {
        let pluginInjector = Injector.create([
           ...this.getProvidersByPluginName(dtdPluginName)
        ], this.injector);

        // Return instance of service, if not found return null
        return pluginInjector.get<T>(serviceNameToken, null);
    }
}
