import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-crisis-center',
    // standalone: false,
    imports: [RouterOutlet],
    template: `
        <h2>Crisis Center</h2>
        <router-outlet></router-outlet>
    `,
})
export class CrisisCenterComponent { }
