import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ICrisis } from './model/ICrisis';
import { CrisisService } from './crisis.service';

export const crisisDetailResolver: ResolveFn<ICrisis> = (route: ActivatedRouteSnapshot) => {
    const router = inject(Router);
    const cs = inject(CrisisService);
    const id = route.paramMap.get('id')!;

    return cs.getCrisis(id).pipe(mergeMap(crisis => {
        if (crisis) {
            return of(crisis);
        } else {  // id not found
            router.navigate(['/crisis-center']);
            return EMPTY;
        }
    }));
};
