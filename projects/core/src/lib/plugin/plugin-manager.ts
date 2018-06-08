import { Extension } from './extension'
import { Injectable } from '@angular/core';
import { PluginProvider } from './plugin-provider';

@Injectable()
export class PluginManager {

    getProviders() : Array<PluginProvider>  {
        return Extension.prototype.getProviders();
    }

    getProvidersByPluginName(pluginName: string) : Array<PluginProvider> {
        let providers = <Array<PluginProvider>> Extension.prototype.getProvidersByPlugin(pluginName);
        if(providers) {
            let pluginProviders = providers.filter(provider => {
                return provider.pluginName == pluginName;
            });
            return pluginProviders;
        } else {
            throw `There is no extension definition in plugin ${pluginName}`
        }
    }
}