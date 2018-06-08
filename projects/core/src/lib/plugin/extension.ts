import { InjectionToken } from "@angular/core";
import { PluginProvider } from "./plugin-provider";

/**
 * Extension decorator for dynamic type
 * @param extensionToken 
 * @param pluginName 
 * @param deps 
 */
export function Extension(extensionToken: InjectionToken<string>, 
    pluginName: string = 'default', deps: Array<any> = []) {
    return (constructor) => {
        if(!pluginName || pluginName === '') {
            pluginName = 'default';
        }
        let extensionName = extensionToken.toString();
        Extension.prototype.registry[pluginName] = Object.assign({}, Extension.prototype.registry[pluginName]);
        Extension.prototype.registry[pluginName][extensionName] = {
            ctor: constructor,
            deps: deps || [],
            token: extensionToken
        };
    };
}

Extension.prototype.registry = {};

Extension.prototype.getProviders = function () {
    let registry = this.registry;
    let providers: Array<PluginProvider> = [];
    // Loop for each plugin 
    Object.keys(registry).forEach(pluginName => {
        let pluginRegistry = registry[pluginName];
        // Loop for each extension
        Object.keys(pluginRegistry).forEach(extensionName => {
            // Add provider item in to array
            providers.push({
                provide: pluginRegistry[extensionName].token,
                useClass: pluginRegistry[extensionName].ctor,
                deps: pluginRegistry[extensionName].deps,
                pluginName: pluginName
            });
        });
    });
    return providers;
};

Extension.prototype.getProvidersByPlugin = function (plugin: string) {
    let registry = this.registry;
    let providers: Array<PluginProvider> = [];
    // Loop for each plugin and filter by specific plugin
    Object.keys(registry)
        .filter(pluginName => pluginName === plugin)
        .forEach(pluginName => {
            // Loop for each extension
            Object.keys(registry[pluginName]).forEach(extensionName => {
                 // Add provider item in to array
                providers.push({
                    provide: registry[pluginName][extensionName].token,
                    useClass: registry[pluginName][extensionName].ctor,
                    deps: registry[pluginName][extensionName].deps,
                    pluginName: pluginName
                });
            });
        });
    return providers;
};


Extension.prototype.getExtensionType = function (extensionToken: InjectionToken<string>, pluginName: string = 'default') {
    let extensionName = extensionToken.toString();
    if(!this.registry[extensionName] || !this.registry[extensionName][pluginName]) {
        throw `${extensionName} is not implemented by in ${pluginName}`;
    }
    return this.registry[extensionName][pluginName].ctor;
}