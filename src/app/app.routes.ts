import { Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

import { authGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canMatch: [authGuard]
    },
    {
        path: 'crisis-center',
        loadChildren: () => import('./crisis-center/crisis-center.routes').then(m => m.CrisisCenterRoutes),
        data: { preload: true }
    },
    {
        path: 'hero/:id',
        component: HeroDetailComponent,
        pathMatch: 'full'
    },
    {
        path: 'superheroes',
        loadChildren: () => import('./heroes/heroes.routes').then(m => m.HEROES_ROUTES),
    },
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
    },

    { path: '', redirectTo: '/superheroes', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

