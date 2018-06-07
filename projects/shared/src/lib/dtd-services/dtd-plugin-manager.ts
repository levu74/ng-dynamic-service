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
        return pluginInjector.get<T>(serviceNameToken, null);
    }
}
