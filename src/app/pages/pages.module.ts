import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [],
  exports: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MainComponent,
    ContactComponent,
    AboutUsComponent,
    ProjectsComponent,
    PathNotFoundComponent,
    ServicesComponent,
  ],
  providers: [],
})
export class PagesModule {}
