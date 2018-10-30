import { Routes, RouterModule } from 'vendor/angular';
import { NavigationDestinationComponent } from 'app/navigation-destination/navigation-destination.component';

const NAVIGATE_ROUTES: Routes = [
  {
    path: 'navigate',
    component: NavigationDestinationComponent,
  },
];

export let NavigateDestinationRouterModule = RouterModule.forChild(NAVIGATE_ROUTES);
