import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PathNotFoundComponent } from "./pages/path-not-found/path-not-found.component";

const routes: Routes = [
  // {
  //   path: "auth",
  //   loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  // },
  // {
  //   path: "heroes",
  //   loadChildren: () =>
  //     import("./heroes/heroes.module").then((m) => m.HeroesModule),
  // },
  
  { path: "/", component: AppComponent },
  // { path: "404", component: PathNotFoundComponent },
  // { path: "**", pathMatch: "full", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}