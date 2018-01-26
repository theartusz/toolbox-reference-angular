import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {DatexPipe} from './pipes/datex.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
    RouterModule
  ],
  declarations: [
    DatexPipe
  ],
  exports: [
    DatexPipe
  ],
  providers: [
  ]
})

export class SharedModule {
}
