import { CompilerFactory, enableProdMode } from "@angular/core";
import { bootstrap, CommonEngine } from "../mod.ts";
import { AppModule } from "./app.module.ts";
import "../reflect.ts";
import "zone.js";

import { assert } from "https://deno.land/std@0.97.0/testing/asserts.ts";

/**
 * Test cases
 */
Deno.test({
  name: "Should render text with Angular version text",
  async fn(): Promise<void> {
    const { readFile } = Deno;
    const decoder = new TextDecoder();

    const indexHtml = decoder.decode(await readFile("index.html"));

    enableProdMode();

    const ref: any = await bootstrap(AppModule, indexHtml);

    const engine = new CommonEngine(
      ref.injector.get(CompilerFactory),
      AppModule,
    );

    const text: string = await engine.render({ document: indexHtml, url: "/" });

    assert(text.includes("<title>Angular SSR with Deno</title>"));
    assert(text.includes('ng-version="12.0.3"'));
  },
});
