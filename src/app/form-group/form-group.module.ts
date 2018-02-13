/**
 * Created by lenewhiteley on 13/02/2018.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import {FormGroupComponent} from './form-group.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    TranslateModule.forRoot()
  ],
  exports: [],
  declarations: [
    FormGroupComponent
  ],
  providers: [],
})
export class FormGroupModule {


}
