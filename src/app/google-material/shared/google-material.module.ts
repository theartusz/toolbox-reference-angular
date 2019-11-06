import {GoogleMaterialComponent} from 'app/google-material/google-material.component';
// modules
import {TranslateModule} from '@ngx-translate/core';
import {GoogleMaterialRouterModule} from 'app/google-material/shared/google-material.route';
import {SharedModule} from 'app/shared/shared.module';
import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    GoogleMaterialComponent,
  ],
  imports: [
    SharedModule,
    GoogleMaterialRouterModule,
    TranslateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  exports: [
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'no-NO' },  // changes the format for the calender to norwegian (en-GB, changes it to english)
  ],
})

export class GoogleMaterialModule { }
