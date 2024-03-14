import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components';
import { RoutingRootPaths } from './models/rootpaths.enum';

const routes: Routes = [
  // {
  //   path: 'projects',
  //   loadComponent: () =>
  //     import('./pages').then(
  //       (m) => m.
  //     ),
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '404',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/path-not-found/path-not-found.component').then(
            (m) => m.PathNotFoundComponent
          ),
      },
      // {
      //   path: RoutingRootPaths.contact,
      //   pathMatch: 'full',
      //   loadComponent: () =>
      //     import('./pages/contact/contact.component').then(
      //       (m) => m.ContactComponent
      //     ),
      // },
      // {
      //   path: RoutingRootPaths.projects,
      //   pathMatch: 'full',
      //   loadComponent: () =>
      //     import('./pages/projects/projects.component').then(
      //       (m) => m.ProjectsComponent
      //     ),
      // },
      // {
      //   path: RoutingRootPaths.services,
      //   pathMatch: 'full',
      //   loadComponent: () =>
      //     import('./pages/services/services.component').then(
      //       (m) => m.ServicesComponent
      //     ),
      // },
      // {
      //   path: RoutingRootPaths.aboutUs,
      //   pathMatch: 'full',
      //   loadComponent: () =>
      //     import('./pages/about-us/about-us.component').then(
      //       (m) => m.AboutUsComponent
      //     ),
      // },
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },

      { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
