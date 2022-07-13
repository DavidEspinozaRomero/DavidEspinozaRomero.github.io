import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  HashLocationStrategy,
  Location,
  LocationStrategy,
} from "@angular/common";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
