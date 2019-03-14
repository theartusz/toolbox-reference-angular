/**
 * Created by orjanertkjern on 24/04/2017.
 */
import { HomeComponent } from 'app/home/home.component';
import {RouterModule, Routes} from '@angular/router';



const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },

];

export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, {scrollPositionRestoration: 'enabled'});

