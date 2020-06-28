import { Component, NgModule, NgModuleFactory, CompilerFactory, StaticProvider, Compiler, enableProdMode } from 'https://jspm.dev/@angular/core';
import { ServerModule, platformDynamicServer, renderModuleFactory, INITIAL_CONFIG } from './platform-server.mjs';

export async function bootstrap(module: any, document: string) {
    return Promise.resolve(platformDynamicServer({
        provide: INITIAL_CONFIG,
        useValue: {
            document,
            url: '/'
        }
    }).bootstrapModule(module, { ngZone: 'noop' }).then((ref: any) => {
        return Promise.resolve(ref)
    }));
}