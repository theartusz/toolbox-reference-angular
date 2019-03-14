import { ErrorComponent } from 'app/error/error.component';
import {RouterModule, Routes} from '@angular/router';

const ERROR_ROUTES: Routes = [
    {
        path: '404',
        component: ErrorComponent,
    },
];

export let ErrorRouterModule = RouterModule.forRoot(ERROR_ROUTES);
