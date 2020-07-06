import { ResourceLoader } from 'https://jspm.dev/@angular/compiler@10.0.1';
import { join } from "https://deno.land/std@0.58.0/path/posix.ts";
import { INITIAL_CONFIG } from './platform-server.mjs';

const { readFile } = Deno;
const decoder = new TextDecoder();

export class DenoFileSystemResourceLoader extends ResourceLoader {
    private readonly filesCache: Map<string, string> = new Map<string, string>()

    constructor(private readonly config: INITIAL_CONFIG) {
        super();
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
        const appDir = (this.config && this.config.resourcePath) || '';
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