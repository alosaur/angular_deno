import { CompilerFactory, enableProdMode } from 'https://jspm.dev/@angular/core';
import { AppModule } from './app.module.ts';
import { bootstrap, CommonEngine } from '../mod.ts';

import "../reflect.ts";
import 'https://jspm.dev/zone.js/dist/zone';


let doc = `
<html>
    <head>
        <title>New doc</title>
    </head>
    <body>
        <my-app></my-app>
    </body>
</html>`;

enableProdMode();

const ref: any = await bootstrap(AppModule, doc);

const engine = new CommonEngine(ref.injector.get(CompilerFactory), AppModule);

// Render page

console.log(await engine.render({ document: doc, url: "/" }));