import { Routes, RouterModule } from 'vendor/angular';
// Component
import { TableComponent } from 'app/responsive_table/table.component';


const RESPONSIVETABLE_ROUTES: Routes = [
  {
    path: 'table',
    component: TableComponent
  }
];

export let TableRouterModule = RouterModule.forChild(RESPONSIVETABLE_ROUTES);
