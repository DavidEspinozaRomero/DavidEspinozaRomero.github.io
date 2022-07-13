import { NgModule } from "@angular/core";
import { CommonModule, RouterModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
