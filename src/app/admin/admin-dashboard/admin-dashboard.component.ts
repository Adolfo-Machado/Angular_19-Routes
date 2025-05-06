import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

import { SelectivePreloadingStrategyService } from '../../services/selective-preloading-strategy.service';

@Component({
    selector: 'app-admin-dashboard',
    // standalone: false,
    imports: [CommonModule],
    template: `
        <h3>Dashboard</h3>

        <p>Session ID: {{ sessionId | async }}</p>
        <div id="anchor"></div>
        <p>Token: {{ token | async }}</p>

        Preloaded Modules
        <ul>
            <li *ngFor="let module of modules">{{ module }}</li>
        </ul>
    `,
})
export class AdminDashboardComponent implements OnInit {
    sessionId!: Observable<string>;
    token!: Observable<string>;
    modules: string[] = [];

    constructor(
        private route: ActivatedRoute,
        preloadStrategy: SelectivePreloadingStrategyService
    ) {
        this.modules = preloadStrategy.preloadedModules;
    }

    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParamMap
            .pipe(map(params => params.get('session_id') || 'None'));

        // Capture the fragment if available
        this.token = this.route
            .fragment
            .pipe(map(fragment => fragment || 'None'));
    }
}
