/**
 * Created by lenewhiteley on 19/02/2018.
 */

import { NgModule } from 'vendor/angular';

// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/shared/shared.module';
import { TableRouterModule } from 'app/responsive_table/shared/table.route';

// component
import { TableComponent } from 'app/responsive_table/table.component';

@NgModule({
  imports: [
    TranslateModule,
    TableRouterModule,
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
