import { createPlatformFactory, COMPILER_OPTIONS } from 'https://jspm.dev/@angular/core@10.0.1';
import { ɵplatformCoreDynamic } from 'https://jspm.dev/@angular/platform-browser-dynamic@10.0.1';
import { ResourceLoader } from 'https://jspm.dev/@angular/compiler@10.0.1';
import { INITIAL_CONFIG, ɵINTERNAL_SERVER_PLATFORM_PROVIDERS as INTERNAL_SERVER_PLATFORM_PROVIDERS } from './platform-server.mjs';
import { DenoFileSystemResourceLoader } from './resource-loader.ts';

const platformDenoDynamicServer = createPlatformFactory(ɵplatformCoreDynamic, "serverDenoDynamic", 
[...INTERNAL_SERVER_PLATFORM_PROVIDERS,
{
    provide: COMPILER_OPTIONS,
    useValue: {
        providers: [
            {
                provide: ResourceLoader,
                useClass: DenoFileSystemResourceLoader,
            }
        ]
    },
    multi: true
}
]);

export async function bootstrap(module: any, document: string, resourcePath?: string) {
    return Promise.resolve(platformDenoDynamicServer({
        provide: INITIAL_CONFIG,
        useValue: {
            document,
            url: '/',
            resourcePath
        }
    }).bootstrapModule(module, { ngZone: 'noop' }).then((ref: any) => {
        
        return Promise.resolve(ref)
    }));
}