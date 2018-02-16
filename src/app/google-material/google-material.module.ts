import {NgModule} from '@angular/core';
import {GoogleMaterialComponent} from './google-material.component';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DATE_LOCALE} from '@angular/material/core';
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
    GoogleMaterialComponent
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

    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
    TranslateModule.forRoot()
  ],
  exports: [
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'no-NO'}  // changes the format for the calender to norwegian (en-GB, changes it to english)
  ],

})

export class GoogleMaterialModule { }
