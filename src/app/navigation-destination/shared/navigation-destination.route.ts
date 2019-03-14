import { NavigationDestinationComponent } from 'app/navigation-destination/navigation-destination.component';
import {RouterModule, Routes} from '@angular/router';

const NAVIGATE_ROUTES: Routes = [
  {
    path: 'navigate',
    component: NavigationDestinationComponent,
  },
];

export let NavigateDestinationRouterModule = RouterModule.forChild(NAVIGATE_ROUTES);
