import { Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { authGuard } from '../auth/auth.guard';

export const AdminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                canActivateChild: [authGuard],
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];
