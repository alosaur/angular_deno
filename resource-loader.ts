import { ResourceLoader } from 'https://jspm.dev/@angular/compiler@11';
import { Injector } from 'https://jspm.dev/@angular/core@11';
import { join } from "https://deno.land/std@0.89.0/path/posix.ts";
import { RESOURCE_PATH } from './bootstrap.ts';

const { readFile } = Deno;
const decoder = new TextDecoder();

export class DenoFileSystemResourceLoader extends ResourceLoader {
    private readonly filesCache: Map<string, string> = new Map<string, string>()
    private readonly resourcePath: string;

    // @ts-ignore
    constructor(private readonly injector: Injector) {
        super();

        this.resourcePath = this.injector.get(RESOURCE_PATH);
    }

    resolve(url: string, baseUrl: string): string {
        // Angular assembles absolute URL's and prefixes them with //
        if (url.indexOf('/') !== 0) {
            // Resolve relative URL's based on the app root.
            return join(baseUrl, url);
        } else {
            return url;
        }
    }

    get(url: string, aa?: any): Promise<string> {        
        const appDir = this.resourcePath || '';
        const filePath = this.resolve(url, appDir);

        if (this.filesCache.has(filePath)) {
            return Promise.resolve(this.filesCache.get(filePath) + '');
        }

        return readFile(filePath).then(source => {
            const template: string = decoder.decode(source)
            this.filesCache.set(filePath, template)

            return template;
        });
    }
}
