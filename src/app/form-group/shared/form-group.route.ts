
import { Routes, RouterModule } from 'vendor/angular';


// Component
import { FormGroupComponent } from 'app/form-group/form-group.component';

const FORMGROUP_ROUTES: Routes = [
  {
    path: 'form',
    component: FormGroupComponent
  }
];

export let FormGroupRouterModule = RouterModule.forRoot(FORMGROUP_ROUTES);
