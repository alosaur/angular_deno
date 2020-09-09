import { CompilerFactory, enableProdMode } from "@angular/core";
import { bootstrap, CommonEngine } from "../mod.ts";
import { AppModule } from "./app.module.ts";

import "../reflect.ts";
import "zone.js";

const { readFile } = Deno;
const decoder = new TextDecoder();

const indexHtml = decoder.decode(await readFile("index.html"));

enableProdMode();

const ref: any = await bootstrap(AppModule, indexHtml);

export const engine = new CommonEngine(
  ref.injector.get(CompilerFactory),
  AppModule,
);

// Render page

console.log(await engine.render({ document: indexHtml, url: "/" }));
