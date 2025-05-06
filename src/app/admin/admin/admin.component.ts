import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-admin',
    // standalone: false,
    imports: [RouterModule],
    template: `
        <h2>Admin</h2>
        <nav>
            <a routerLink="./" routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }" ariaCurrentWhenActive="page">Dashboard</a>
            <a routerLink="./crises" routerLinkActive="active" ariaCurrentWhenActive="page">Manage Crises</a>
            <a routerLink="./heroes" routerLinkActive="active" ariaCurrentWhenActive="page">Manage Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
}
