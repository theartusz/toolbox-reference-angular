import { FormGroupComponent } from 'app/form-group/form-group.component';
import {RouterModule, Routes} from '@angular/router';

const FORMGROUP_ROUTES: Routes = [
  {
    path: 'form',
    component: FormGroupComponent,
  },
];

export let FormGroupRouterModule = RouterModule.forRoot(FORMGROUP_ROUTES);
