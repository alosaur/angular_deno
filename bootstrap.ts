import { createPlatformFactory, Injector, COMPILER_OPTIONS, InjectionToken } from 'https://jspm.dev/@angular/core@11.0.5';
import {  ɵplatformCoreDynamic } from 'https://jspm.dev/@angular/platform-browser-dynamic@11.0.5';
import { ResourceLoader } from 'https://jspm.dev/@angular/compiler@11.0.5';
import { INITIAL_CONFIG, ɵINTERNAL_SERVER_PLATFORM_PROVIDERS as INTERNAL_SERVER_PLATFORM_PROVIDERS } from './platform-server.mjs';
import { DenoFileSystemResourceLoader } from './resource-loader.ts';

export const RESOURCE_PATH = new InjectionToken('RESOURCE_PATH');

const platformDenoDynamicServer = (resourcePath: string) => createPlatformFactory(ɵplatformCoreDynamic, "serverDenoDynamic",
[...INTERNAL_SERVER_PLATFORM_PROVIDERS,
{
    provide: COMPILER_OPTIONS,
    useValue: {
        providers: [
            {
                provide: RESOURCE_PATH,
                useValue: resourcePath
            },
            {
                provide: ResourceLoader,
                useClass: DenoFileSystemResourceLoader,
                deps: [Injector]
            }
        ]
    },
    multi: true
}
]);

export async function bootstrap(module: any, document: string, resourcePath: string = "") {
    return Promise.resolve(platformDenoDynamicServer(resourcePath)([
    {
        provide: INITIAL_CONFIG,
        useValue: {
            document,
            url: '/'
        }
    }]).bootstrapModule(module, { ngZone: 'noop' }).then((ref: any) => {        
        return Promise.resolve(ref)
    }));
}
