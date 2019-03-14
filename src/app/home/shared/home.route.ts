// Component
import { HomeComponent } from 'app/home/home.component';
import {RouterModule, Routes} from '@angular/router';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export let HomeRouterModule = RouterModule.forRoot(HOME_ROUTES);
