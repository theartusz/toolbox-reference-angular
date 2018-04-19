
import { Routes, RouterModule } from 'vendor/angular';

// Components
import { AdminDashboardComponent } from 'app/admin/dashboard/admin-dashboard.component';
import { SkillsComponent } from 'app/admin/skills/skills.component';
import { SkillComponent } from 'app/admin/skills/shared/skill/skill.component';


const ADMIN_ROUTES: Routes = [
  {
    path: 'adminDashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
];

export let AdminRouterModule = RouterModule.forRoot(ADMIN_ROUTES, { useHash: false });
