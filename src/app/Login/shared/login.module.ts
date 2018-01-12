import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';

// Route
import { LoginRouterModule } from './login.route';

// Component
import { LoginComponent } from '../login.component';
import { LoginService } from './login.service';


@NgModule({
  imports: [
    BrowserModule, LoginRouterModule,
    TranslateModule.forRoot()
  ],
  exports: [],
  declarations: [
    LoginComponent
  ],
  providers: [LoginService],
})

export class LoginModule {
}
