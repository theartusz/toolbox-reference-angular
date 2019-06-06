// Component
import { GoogleMaterialComponent } from 'app/google-material/google-material.component';
import {RouterModule, Routes} from '@angular/router';

const GOOGLEMATERIAL_ROUTES: Routes = [
  {
    path: 'material',
    component: GoogleMaterialComponent,
  },
];

export let GoogleMaterialRouterModule = RouterModule.forRoot(GOOGLEMATERIAL_ROUTES);
