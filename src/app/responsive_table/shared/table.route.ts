// Component
import { TableComponent } from 'app/responsive_table/table.component';
import {RouterModule, Routes} from '@angular/router';


const RESPONSIVETABLE_ROUTES: Routes = [
  {
    path: 'table',
    component: TableComponent,
  },
];

export let TableRouterModule = RouterModule.forChild(RESPONSIVETABLE_ROUTES);
