import { CompilerFactory, enableProdMode } from 'https://jspm.dev/@angular/core';
import { AppModule } from './app.module.ts';
import { bootstrap, CommonEngine } from '../mod.ts';

import "../reflect.ts";
import 'https://jspm.dev/zone.js/dist/zone';

const { readFile } = Deno;
const decoder = new TextDecoder();

const indexHtml = decoder.decode(await readFile('example/index.html'));


enableProdMode();

const ref: any = await bootstrap(AppModule, indexHtml);

const engine = new CommonEngine(ref.injector.get(CompilerFactory), AppModule);

// Render page

console.log(await engine.render({ document: indexHtml, url: "/" }));