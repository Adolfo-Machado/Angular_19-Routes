import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { IHero } from '../model/IHero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-detail',
    standalone: true,
    imports: [FormsModule, CommonModule],
    template: `
        <h2>Heroes</h2>
        <div *ngIf="hero$ | async as hero">
            <h3>{{ hero.name }}</h3>
            <p>Id: {{ hero.id }}</p>
            <label for="hero-name">Hero name: </label>
            <input type="text" id="hero-name" [(ngModel)]="hero.name" placeholder="name" />
            <button type="button" (click)="gotoHeroes(hero)">Back</button>
        </div>
    `,
    styles: `
        button {
            margin-top: 1rem;
        }

        label {
            display: block;
            margin-bottom: .5rem;
        }
    `
})
export class HeroDetailComponent implements OnInit {

    hero$!: Observable<IHero>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private hs: HeroService
    ) { }

    ngOnInit() {
        this.hero$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.hs.getHero(params.get('id')!)));
    }

    gotoHeroes(hero: IHero) {
        this.router.navigate(['/superheroes', { id: hero.id, foo: 'bar'}]);
    }
}
