// modules
import { SharedModule } from 'app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NavigateDestinationRouterModule } from 'app/navigation-destination/shared/navigation-destination.route';

// component

import { NavigationDestinationComponent } from 'app/navigation-destination/navigation-destination.component';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    TranslateModule,
    NavigateDestinationRouterModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    NavigationDestinationComponent,
  ],
  providers: [],
})
export class NavigationDestinationModule {
}
