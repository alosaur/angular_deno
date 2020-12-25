# Angular renderer in Deno

Now Supported Angular 11 and Deno 1.6

This is experimental Angular SSR in Deno, and will be used as a renderer for [Alosaur](https://github.com/alosaur/alosaur) web framework, as well as handlebars, ejs, mustache. 

## How to use

`deno run --config tsconfig.json --unstable --importmap=importmap.json --allow-read main.ts`

Declare Angular deps

importmap.json:
```json
{
  "imports": {
    "@angular/core": "https://jspm.dev/@angular/core@11",
    "@angular/deno": "https://deno.land/x/angular_deno/mod.ts",
    "@angular/deno/": "https://deno.land/x/angular_deno/",
     "zone.js": "https://jspm.dev/zone.js/dist/zone"
  }
}
```

main.ts:

```ts
import { CompilerFactory, enableProdMode } from '@angular/core';
import { bootstrap, CommonEngine } from '@angular/deno';
import { AppModule } from './app.module.ts';

import "@angular/deno/reflect.ts";
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

- [ ] Transfer state
- [ ] AOT
- [ ] SASS support 
