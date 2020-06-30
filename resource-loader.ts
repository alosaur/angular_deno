import { ResourceLoader } from 'https://jspm.dev/@angular/compiler';
import { join } from "https://deno.land/std@0.58.0/path/posix.ts";

const { readFile } = Deno;
const decoder = new TextDecoder();

export class FileSystemResourceLoader extends ResourceLoader {
    private readonly filesCache: Map<string, string> = new Map<string, string>()

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
        const appDir = 'example';
        const templatePath = this.resolve(url, appDir);

        if (this.filesCache.has(templatePath)) {
            return Promise.resolve(this.filesCache.get(templatePath) + '');
        }

        return readFile(templatePath).then(source => {
            const template: string = decoder.decode(source)
            this.filesCache.set(templatePath, template)

            return template;
        });
    }
}