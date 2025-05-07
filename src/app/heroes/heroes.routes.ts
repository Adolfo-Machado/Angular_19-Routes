import { Routes } from '@angular/router';

import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const HEROES_ROUTES: Routes = [
    { path: '', component: HeroesListComponent, data: { animation: 'heroes' } },
    { path: ':id', component: HeroDetailComponent, data: { animation: 'hero' } }
];
