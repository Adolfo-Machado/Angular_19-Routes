import { Component } from '@angular/core';

@Component({
    selector: 'app-crisis-center',
    standalone: false,
    template: `
        <h2>Crisis Center</h2>
        <router-outlet></router-outlet>
    `,
})
export class CrisisCenterComponent { }
