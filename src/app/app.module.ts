import { NgModule, BrowserAnimationsModule, HttpClient } from 'vendor/angular';

// app component
import { AppComponent } from './app.component';

// Module
import { SharedModule } from 'app/shared/index.shared';
import { AppRouterModule } from 'app/app.routes';
import { HomeModule } from 'app/home/index.home';
import { ErrorModule } from 'app/error/index.error';
import { FormGroupModule } from 'app/form-group/index.form-group';
import { GoogleMaterialModule } from 'app/google-material/index.material';
import { TableModule } from 'app/responsive_table/index.responsive';
import { NavigationDestinationModule } from 'app/navigation-destination/index.navigation';

// translation
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// create loader for translation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    AppRouterModule,
    BrowserAnimationsModule,
    ErrorModule,
    FormGroupModule,
    GoogleMaterialModule,
    HomeModule,
    NavigationDestinationModule,
    TableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
