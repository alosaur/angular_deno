import { NgModule } from "@angular/core";
import { ServerModule } from "../mod.ts";
import { AppComponent } from "./app.component.ts";

@NgModule({
  imports: [ServerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
