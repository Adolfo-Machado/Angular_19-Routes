import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading, withComponentInputBinding } from '@angular/router';
import { appRoutes } from './app.routes';

import { SelectivePreloadingStrategyService } from './services/selective-preloading-strategy.service';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            appRoutes,
            withPreloading(SelectivePreloadingStrategyService),
            withComponentInputBinding()
        ),
        { provide: SelectivePreloadingStrategyService, useClass: SelectivePreloadingStrategyService }
    ]
};
