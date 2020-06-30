import { createPlatformFactory, COMPILER_OPTIONS } from 'https://jspm.dev/@angular/core';
import { ɵplatformCoreDynamic } from 'https://jspm.dev/@angular/platform-browser-dynamic';
import { ResourceLoader } from 'https://jspm.dev/@angular/compiler';
import { INITIAL_CONFIG, ɵINTERNAL_SERVER_PLATFORM_PROVIDERS as INTERNAL_SERVER_PLATFORM_PROVIDERS } from './platform-server.mjs';
import { FileSystemResourceLoader } from './resource-loader.ts';

const platformDenoDynamicServer = createPlatformFactory(ɵplatformCoreDynamic, "serverDenoDynamic", [...INTERNAL_SERVER_PLATFORM_PROVIDERS,
{
    provide: COMPILER_OPTIONS,
    useValue: {
        providers: [
            {
                provide: ResourceLoader,
                useClass: FileSystemResourceLoader,
                deps: []
            }
        ]
    },
    multi: true
}
]);

export async function bootstrap(module: any, document: string) {
    return Promise.resolve(platformDenoDynamicServer({
        provide: INITIAL_CONFIG,
        useValue: {
            document,
            url: '/'
        }
    }).bootstrapModule(module, { ngZone: 'noop' }).then((ref: any) => {
        return Promise.resolve(ref)
    }));
}