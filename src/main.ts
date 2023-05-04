import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing';
import { ToastrModule } from 'ngx-toastr';
import {
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import {
  Location,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { RoutingRootPaths } from './app/models/rootpaths.enum';
import { Routes, provideRouter } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

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
    loadComponent: () =>
      import('./app/components/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      {
        path: '404',
        pathMatch: 'full',
        loadComponent: () =>
          import('./app/pages/path-not-found/path-not-found.component').then(
            (m) => m.PathNotFoundComponent
          ),
      },
      {
        path: RoutingRootPaths.contact,
        pathMatch: 'full',
        loadComponent: () =>
          import('./app/pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
      {
        path: RoutingRootPaths.projects,
        pathMatch: 'full',
        loadComponent: () =>
          import('./app/pages/projects/projects.component').then(
            (m) => m.ProjectsComponent
          ),
      },
      {
        path: RoutingRootPaths.services,
        pathMatch: 'full',
        loadComponent: () =>
          import('./app/pages/services/services.component').then(
            (m) => m.ServicesComponent
          ),
      },
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
          import('./app/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },

      { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
      })
    ),
    provideRouter(routes),
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));
