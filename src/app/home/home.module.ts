/**
 * Created by orjanertkjern on 21/08/2017.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {GreeterComponent} from './greeter/greeter.component';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    RouterModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    GreeterComponent
  ],
  providers: [],
})
export class HomeModule {
}
