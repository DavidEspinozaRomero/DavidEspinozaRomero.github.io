import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainComponent } from './main/main.component';
import { ProjectsComponent } from "./projects/projects.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";


const routes: Routes = [
  
  { path: "", component: MainComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutUsComponent },
  { path: "404", component: PathNotFoundComponent },
  { path: "**", pathMatch: "full", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}