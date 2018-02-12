import {NgModule} from '@angular/core';
import {CalenderComponent} from './calender.component';
import {MatDatepickerModule, MatFormFieldModule} from '@angular/material';
import { MatInputModule } from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    RouterModule,
    SharedModule,
    TranslateModule.forRoot()
  ],
  exports: [],
  providers: [],

})

export class CalenderComponentModule { }
