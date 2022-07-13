import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages.routing";
import { MainComponent } from "./main/main.component";
import { PathNotFoundComponent } from "./path-not-found/path-not-found.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ProjectsComponent } from "./projects/projects.component";

@NgModule({
  declarations: [
    MainComponent,
    ContactComponent,
    AboutUsComponent,
    ProjectsComponent,
    PathNotFoundComponent,
  ],
  exports: [],
  imports: [CommonModule, PagesRoutingModule],
  providers: [],
})
export class PagesModule {}
