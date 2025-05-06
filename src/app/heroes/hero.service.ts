import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { IHero } from './model/IHero';
import { HEROES } from './mock-heroes';
import { MessageService } from '../services/message.service';

@Injectable({
    providedIn: 'root',
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<IHero[]> {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }

    getHero(id: number | string) {
        return this.getHeroes().pipe(
            // (+) before `id` turns the string into a number
            map((heroes: IHero[]) => heroes.find(hero => hero.id === +id)!)
        );
    }
}

