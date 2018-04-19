
import { Routes, RouterModule } from 'vendor/angular';


// Component
import { HomeComponent } from 'app/home/home.component';

const HOME_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

export let HomeRouterModule = RouterModule.forRoot(HOME_ROUTES, { useHash: false });
