import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './services/animations';

@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    animations: [slideInAnimation],
})
export class AppComponent {
    constructor(private contexts: ChildrenOutletContexts) { }

    getRouteAnimationData() {
        return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    }
}
