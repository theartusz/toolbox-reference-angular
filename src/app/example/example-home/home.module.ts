// components
import { HomeComponent } from './home.component';

// modules
import { HomeRouterModule } from './home.route';
import { ExampleSharedModule } from 'src/app/example/example-shared/example-shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [TranslateModule, ExampleSharedModule, HomeRouterModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
