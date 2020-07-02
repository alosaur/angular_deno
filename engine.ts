
import { NgModuleFactory, CompilerFactory, StaticProvider, Compiler } from 'https://jspm.dev/@angular/core@10.0.1';
import { INITIAL_CONFIG, renderModuleFactory } from './platform-server.mjs';
const { readFile } = Deno;
const decoder = new TextDecoder();

export class CommonEngine {

    /** Return an instance of the platformServer compiler */
    getCompiler(): Compiler {
        const compilerFactory: CompilerFactory = this.compilerFactory;//platformCoreDynamic().injector.get(CompilerFactory);

        return compilerFactory.createCompiler();
    }

    private factoryCacheMap = new Map<any, any>();
    private readonly templateCache: Map<string, string> = new Map<string, string>()

    constructor(private compilerFactory: CompilerFactory, private moduleOrFactory?: any,
        private providers: StaticProvider[] = []) { }

    /**
     * Render an HTML document for a specific URL with specified
     * render options
     */
    async render(opts: any): Promise<string> {
        // if opts.document dosen't exist then opts.documentFilePath must
        const doc = opts.document || await this.getDocument(opts.documentFilePath as string);
        const extraProviders = [
            ...(opts.providers || []),
            ...(this.providers || []),
            {
                provide: INITIAL_CONFIG,
                useValue: {
                    document: doc,
                    url: opts.url
                }
            }
        ];

        const moduleOrFactory = this.moduleOrFactory || opts.bootstrap;
        const factory = await this.getFactory(moduleOrFactory);

        return renderModuleFactory(factory, { extraProviders });
    }

    /** Return the factory for a given engine instance */
    async getFactory(moduleOrFactory: any): Promise<any> {
        // If module has been compiled AoT
        if (moduleOrFactory instanceof NgModuleFactory) {
            return moduleOrFactory;
        } else {
            // we're in JIT mode
            const moduleFactory = this.factoryCacheMap.get(moduleOrFactory);

            // If module factory is cached
            if (moduleFactory) {
                return moduleFactory;
            }

            // Compile the module and cache it
            const factory = await this.getCompiler().compileModuleAsync(moduleOrFactory);
            this.factoryCacheMap.set(moduleOrFactory, factory);

            return factory;
        }
    }

    /** Retrieve the document from the cache or the filesystem */
    private getDocument(filePath: string): Promise<string> {        
        if (this.templateCache.has(filePath)) {
            return Promise.resolve(this.templateCache.get(filePath) + '');
        }

        return readFile(filePath).then(source => {
            const template: string = decoder.decode(source)
            this.templateCache.set(filePath, template)

            return template;
        });
    }
}