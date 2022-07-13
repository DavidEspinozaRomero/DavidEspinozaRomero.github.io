import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { MainComponent } from './main/main.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  declarations: [MainComponent, PathNotFoundComponent],
  exports: [MainComponent, PathNotFoundComponent],
  imports: [CommonModule, PagesRoutingModule],
  providers: [],
})
export class PagesModule {}
