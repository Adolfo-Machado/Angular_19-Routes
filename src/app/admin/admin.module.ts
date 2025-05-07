import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(AdminRoutes)
    ]
})
export class AdminModule { }
