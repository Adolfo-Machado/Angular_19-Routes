// TODO: Feature Componentized like CrisisCenter
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from '../hero.service';
import { IHero } from '../model/IHero';

@Component({
    selector: 'app-hero-list',
    standalone: false,
    template: `
        <h2>Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes$ | async" [class.selected]="hero.id === selectedId">
                <a [routerLink]="['/hero', hero.id]">
                    <span class="badge">{{ hero.id }}</span>{{ hero.name }}
                </a>
            </li>
        </ul>
        <button type="button" routerLink="/sidekicks">Go to sidekicks</button>
    `,
    styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
    heroes$!: Observable<IHero[]>;
    selectedId = 0;

    constructor(
        private service: HeroService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.heroes$ = this.route.paramMap.pipe(
            switchMap(params => {
                this.selectedId = Number(params.get('id')!);
                return this.service.getHeroes();
            })
        );
    }
}
