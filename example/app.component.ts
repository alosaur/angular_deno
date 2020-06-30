import { Component } from 'https://jspm.dev/@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    versionDeno = Deno.version.deno;
}
