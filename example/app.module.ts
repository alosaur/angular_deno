
import { NgModule } from 'https://jspm.dev/@angular/core@10.0.1';
import { ServerModule } from '../mod.ts';
import { AppComponent } from './app.component.ts';


@NgModule({
    imports: [ServerModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }