import { NgModule } from 'vendor/angular';
import { TranslateModule } from '@ngx-translate/core';


// Route
import { LoginRouterModule } from 'app/login/shared/login.route';

// Component
import { LoginComponent } from 'app/login/login.component';
// services

import { LoginService } from 'app/login/shared/login.service';

@NgModule({
  imports: [
    LoginRouterModule,
    TranslateModule
  ],
  exports: [],
  declarations: [
    LoginComponent
  ],
  providers: [LoginService],
})

export class LoginModule {
}
