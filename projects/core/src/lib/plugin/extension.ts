import { InjectionToken } from "@angular/core";

export function Extension(extensionToken: InjectionToken<string>, pluginName: string = 'default', deps: Array<any>) {
    return (constructor) => {
        if(!pluginName || pluginName === '') {
            pluginName = 'default';
        }
        let extensionName = extensionToken.toString();
        Extension.prototype.registry[extensionName.toString()] = Object.assign({}, Extension.prototype.registry[extensionName]);
        Extension.prototype.registry[extensionName.toString()][pluginName] = {
            ctor: constructor,
            deps: deps || [],
            token: extensionToken
        };
    };
}

Extension.prototype.registry = {};

Extension.prototype.getProviders = function () {
    let registry = this.registry;
    let providers = []
    Object.keys(registry).forEach(function (extensionName) {
        Object.keys(registry[extensionName]).forEach(function (pluginName) {
            providers.push({
                provide: registry[extensionName][pluginName].token,
                useClass: registry[extensionName][pluginName].ctor,
                deps: registry[extensionName][pluginName].deps,
                pluginName: pluginName
            });
        });
        
    });
    return providers;
};


Extension.prototype.getProvidersBy = function (extensionToken: InjectionToken<string>) {
    var registry = this.registry;
    let extensionName = extensionToken.toString();
    return Object.keys(registry).filter(prop => prop === extensionName).map(function (extensionName) {
        return Object.keys(registry[extensionName]).map(function (pluginName) {
            return {
                provide: registry[extensionName][pluginName].token,
                useClass: registry[extensionName][pluginName].ctor,
                deps: registry[extensionName][pluginName].deps,
                multi: true
            };
        });
    });
};

Extension.prototype.getExtensionType = function (extensionToken: InjectionToken<string>, pluginName: string = 'default') {
    let extensionName = extensionToken.toString();
    if(!this.registry[extensionName] || !this.registry[extensionName][pluginName]) {
        throw "Service is not implement";
    }
    return this.registry[extensionName][pluginName].ctor;
}