// modules
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/shared/shared.module';
import { TableRouterModule } from 'app/responsive_table/shared/table.route';

// component
import { TableComponent } from 'app/responsive_table/table.component';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    TranslateModule,
    TableRouterModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    TableComponent,
  ],
  providers: [],
})
export class TableModule {
}
