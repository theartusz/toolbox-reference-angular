import { TranslateModule } from '@ngx-translate/core';
// components
import { HomeComponent } from 'app/home/home.component';
import { GreeterComponent } from 'app/home/shared/greeter/greeter.component';

// modules
import { HomeRouterModule } from 'app/home/shared/home.route';
import { SharedModule } from 'app/shared/shared.module';
import {NgModule} from '@angular/core';


@NgModule({
  imports: [
    TranslateModule,
    SharedModule,
    HomeRouterModule,
  ],
  exports: [],
  declarations: [
    HomeComponent,
    GreeterComponent,
  ],
  providers: [],
})
export class HomeModule {
}
