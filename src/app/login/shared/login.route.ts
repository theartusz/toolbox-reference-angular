
import { Routes, RouterModule } from 'vendor/angular';

// Component
import { LoginComponent } from '../login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export let LoginRouterModule = RouterModule.forRoot(LOGIN_ROUTES);
