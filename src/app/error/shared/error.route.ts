
import { Routes, RouterModule } from 'vendor/angular';


// Component
import { ErrorComponent } from 'app/error/error.component';

const ERROR_ROUTES: Routes = [
    {
        path: '404',
        component: ErrorComponent
    }
];

export let ErrorRouterModule = RouterModule.forRoot(ERROR_ROUTES, { useHash: false });
