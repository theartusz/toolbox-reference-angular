/**
 * Created by orjanertkjern on 21/08/2017.
 */

import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {GreeterComponent} from './greeter/greeter.component';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    RouterModule
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
