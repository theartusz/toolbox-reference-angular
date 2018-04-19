import { NgModule } from 'vendor/angular';

// modules

import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/shared/shared.module';
import { AdminRouterModule } from 'app/admin/shared/admin.route';

// Components
import { AdminDashboardComponent } from 'app/admin/dashboard/admin-dashboard.component';
import { SkillsComponent } from 'app/admin/skills/skills.component';
import { SkillComponent } from 'app/admin/skills/shared/skill/skill.component';


@NgModule({
  imports: [
    TranslateModule,
    SharedModule,
    AdminRouterModule
  ],
  exports: [],
  declarations: [
    AdminDashboardComponent,
    SkillComponent,
    SkillsComponent
  ],
  providers: [],
})

export class AdminModule {
}
