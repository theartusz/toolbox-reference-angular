import { Routes, RouterModule } from 'vendor/angular';


// Component
import { GoogleMaterialComponent } from 'app/google-material/google-material.component';

const GOOGLEMATERIAL_ROUTES: Routes = [
  {
    path: 'material',
    component: GoogleMaterialComponent
  }
];

export let GoogleMaterialRouterModule = RouterModule.forRoot(GOOGLEMATERIAL_ROUTES, { useHash: false });
