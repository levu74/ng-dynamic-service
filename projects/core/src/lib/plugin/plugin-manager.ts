import { Extension } from './extension'
import { Injectable } from '@angular/core';

@Injectable()
export class PluginManager {

    getType(extensionName, pluginName) {
        return Extension.prototype.getExtensionType(extensionName, pluginName);
    }

    getProviders() {
        return Extension.prototype.getProviders();
    }

    getProvidersByPluginName(pluginName: string) {
        let providers = <Array<any>> Extension.prototype.getProviders();
        if(providers) {
            let pluginProviders = providers.filter(provider => {
                return provider.pluginName == pluginName;
            });
            return pluginProviders;
        }
    }
}

export const pluginManager = new PluginManager();