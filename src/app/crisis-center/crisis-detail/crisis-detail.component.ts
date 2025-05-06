import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ICrisis } from '../model/ICrisis';
import { DialogService } from '../../services/dialog.service';

@Component({
    selector: 'app-crisis-detail',
    standalone: false,
    template: `
        <div *ngIf="crisis">
            <h3>{{ editName }}</h3>
            <p>Id: {{ crisis.id }}</p>
            <label for="crisis-name">Crisis name: </label>
            <input type="text" id="crisis-name" [(ngModel)]="editName" placeholder="name" />
            <div>
                <button type="button" (click)="save()">Save</button>
                <button type="button" (click)="cancel()">Cancel</button>
            </div>
        </div>
    `,
    styles: `
        h2 {
            font-size: 1.5rem;
        }

        input {
            font-size: 1rem;
            margin-top: 1rem;
        }
    `
})
export class CrisisDetailComponent implements OnInit {
    crisis!: ICrisis;
    editName = '';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) { }

    ngOnInit() {
        this.route.data
            .subscribe(data => {
                const crisis: ICrisis = data['crisis'];
                this.editName = crisis.name;
                this.crisis = crisis;
            });
    }

    cancel() {
        this.gotoCrises();
    }

    save() {
        this.crisis.name = this.editName;
        this.gotoCrises();
    }

    canDeactivate(): Observable<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        // Otherwise ask the user with the dialog service and return its
        // observable which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    }

    gotoCrises() {
        const crisisId = this.crisis ? this.crisis.id : null;
        // Pass along the crisis id if available
        // so that the CrisisListComponent can select that crisis.
        // Add a totally useless `foo` parameter for kicks.
        // Relative navigation back to the crises
        this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
    }
}
