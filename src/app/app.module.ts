import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  HashLocationStrategy,
  Location,
  LocationStrategy,
} from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule, PagesModule, SharedModule],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
