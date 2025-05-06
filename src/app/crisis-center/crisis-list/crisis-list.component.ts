import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { CrisisService } from '../crisis.service';
import { ICrisis } from '../model/ICrisis';

@Component({
    selector: 'app-crisis-list',
    // standalone: false,
    imports: [RouterModule, CommonModule],
    template: `
    <ul class="crises">
        <li *ngFor="let crisis of crises$ | async" [class.selected]="crisis.id === selectedId">
            <a [routerLink]="[crisis.id]">
                <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
            </a>
        </li>
    </ul>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
    crises$?: Observable<ICrisis[]>;
    selectedId = 0;

    constructor(
        private service: CrisisService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.crises$ = this.route.firstChild?.paramMap.pipe(
            switchMap(params => {
                this.selectedId = parseInt(params.get('id')!, 10);
                return this.service.getCrises();
            })
        );
    }
}
