import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserModule } from '@angular/platform-browser';

// Route
import { AdminRouterModule } from './admin.route';

// Components
import {AdminDashboardComponent, SkillComponent, SkillsComponent} from '../index.admin';


@NgModule({
  imports: [
    BrowserModule,
    AdminRouterModule,
    TranslateModule.forRoot()
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
