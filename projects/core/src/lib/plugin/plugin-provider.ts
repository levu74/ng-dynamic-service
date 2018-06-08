import { ClassProvider } from "@angular/core";

export interface PluginProvider extends ClassProvider {
    pluginName: string;
    deps: any[]
}