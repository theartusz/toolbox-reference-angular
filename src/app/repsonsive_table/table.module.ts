/**
 * Created by lenewhiteley on 19/02/2018.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import {TableComponent} from './table.component';

@NgModule({
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    RouterModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    TableComponent
  ],
  providers: [],
})
export class TableModule {
}
