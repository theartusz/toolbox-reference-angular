/**
 * Created by orjanertkjern on 21/08/2017.
 */

import {NgModule} from '@angular/core';

import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NavigationDestinationComponent} from './navigation-destination.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    TranslateModule.forRoot()
  ],
  exports: [],
  declarations: [
    NavigationDestinationComponent
  ],
  providers: [],
})
export class NavigationDestinationModule {
}
