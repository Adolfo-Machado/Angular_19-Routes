import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-compose-message',
    // standalone: false,
    imports: [CommonModule, FormsModule],
    template: `
        <h3>Contact Crisis Center</h3>
        <div *ngIf="details">{{ details }}</div>
        <div>
            <div>
                <label for="message">Enter your message: </label>
            </div>
            <div>
                <textarea id="message" [(ngModel)]="message" rows="10" cols="35" [disabled]="sending"></textarea>
            </div>
        </div>
        <p *ngIf="!sending">
            <button type="button" (click)="send()">Send</button>
            <button type="button" (click)="cancel()">Cancel</button>
        </p>
    `,
    styles: `
        textarea {
            width: 100%;
            margin-top: 1rem;
            font-size: 1.2rem;
            box-sizing: border-box;
        }
    `
})
export class ComposeMessageComponent {
    details = '';
    message = '';
    sending = false;

    constructor(private router: Router, private route: ActivatedRoute) { }

    send() {
        this.sending = true;
        this.details = 'Sending Message...';

        setTimeout(() => {
            this.sending = false;
            this.closePopup();
        }, 1000);
    }

    cancel() {
        this.closePopup();
    }

    closePopup() {
        // Providing a `null` value to the named outlet
        // clears the contents of the named outlet
        this.router.navigate([{ outlets: { popup: null } }], { relativeTo: this.route.parent });
    }
}
