import {NgModule} from '@angular/core';
import {CalenderComponent} from './calender.component';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [
    CalenderComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,

    BrowserModule,
    RouterModule,
    TranslateModule.forRoot()
  ],
  exports: [],
  providers: [],

})

export class CalenderComponentModule { }
