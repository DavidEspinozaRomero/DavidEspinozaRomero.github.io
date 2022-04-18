import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

@NgModule({
  declarations: [MainComponent, PathNotFoundComponent],
  exports: [MainComponent, PathNotFoundComponent],
  imports: [CommonModule],
  providers: [],
})
export class PagesModule {}
