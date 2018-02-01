
import { Routes, RouterModule } from '@angular/router';

// Components
import {
  AdminDashboardComponent,
  SkillComponent, SkillsComponent
} from '../index.admin';


const ADMIN_ROUTES: Routes = [
  {
    path: 'AdminDashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'Skill',
    component: SkillComponent
  },
  {
    path: 'Skills',
    component: SkillsComponent
  }
];

export let AdminRouterModule = RouterModule.forRoot(ADMIN_ROUTES, { useHash: false });
