// Component
import { HomeComponent } from '/app/example/example-home/home.component';
import {RouterModule, Routes} from '@angular/router';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

export const HomeRouterModule = RouterModule.forRoot(HOME_ROUTES);
