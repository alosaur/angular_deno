
import { Component, NgModule, Version } from 'https://jspm.dev/@angular/core';
import { ServerModule } from '../mod.ts';

@Component({
    selector: 'my-app',
    template: 'Angular in Deno v{{versionDeno}}',
})
export class AppComponent {
    versionDeno = Deno.version.deno;
}

@NgModule({
    imports: [ServerModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }