# Angular renderer in Deno

![test](https://github.com/alosaur/angular_deno/workflows/test/badge.svg)

Now Supported Angular 12.0.3 and Deno 1.11.0

This is experimental Angular SSR in Deno, and will be used as a renderer for [Alosaur](https://github.com/alosaur/alosaur) web framework, as well as handlebars, ejs, mustache. 

## How to use

`deno run --importmap=importmap.json --location=https://jspm.dev --allow-read main.ts`

Declare Angular deps

importmap.json:
```json
{
  "imports": {
    "@angular/core": "https://jspm.dev/@angular/core@12.0.3",
    "@angular/deno": "https://deno.land/x/angular_deno/mod.ts",
    "@angular/deno/": "https://deno.land/x/angular_deno/",
    "reflect": "https://deno.land/x/alosaur@v0.34.0/src/injection/reflect.ts",
     "zone.js": "https://jspm.dev/zone.js/dist/zone"
  }
}
```

main.ts:

```ts
import { CompilerFactory, enableProdMode } from '@angular/core';
import { bootstrap, CommonEngine } from '@angular/deno';
import { AppModule } from './app.module.ts';

import "reflect";
import 'zone.js';

const { readFile } = Deno;
const decoder = new TextDecoder();

// Read index.html for root parse
const indexHtml = decoder.decode(await readFile('index.html'));

enableProdMode();

// bootstrap main app
const ref: any = await bootstrap(AppModule, indexHtml);

// create renderer engine
const engine = new CommonEngine(ref.injector.get(CompilerFactory), AppModule);


// Render page for URL
const page: string = await engine.render({ document: indexHtml, url: "/" });
```

app.module.ts:

```ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/deno';
import { AppComponent } from './app.component.ts';


@NgModule({
    imports: [ServerModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }
```

## TODO 

If the "stars" on this project will be more than 100 ;)

- [ ] Transfer state
- [ ] AOT
- [ ] SASS support 

### Note

All .mjs files in this repository exported from jspm.dev as ESM module, for example:
https://jspm.dev/npm:@angular/platform-server@10.2.4!cjs

Why platform-server.mjs exported from jspm and not rewrite DominoAdapter?
I do not remember, maybe something broke at the moment of redefining providers
https://github.com/angular/angular/blob/a6971ba89adc253bfa4260036ee4a1e0bd76159f/packages/platform-server/src/server.ts#L33
