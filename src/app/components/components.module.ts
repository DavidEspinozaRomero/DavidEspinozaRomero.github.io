import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebartestComponent } from "./sidebartest/sidebartest.component";

@NgModule({
  declarations: [SidebartestComponent],
  exports: [SidebartestComponent],
  imports: [ CommonModule ],
  providers: [],
})
export class ComponentsModule {}