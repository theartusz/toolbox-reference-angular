import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRouterModule} from './app.routes';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {ErrorModule} from './error/error.module';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {MomentModule} from 'angular2-moment';
import {ServiceModule} from './services/services.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorHandler} from './shared/interceptor/HttpInterceptorHandler';
import {NavigationDestinationModule} from './navigation-destination/navigation-destination.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserModule,
    ErrorModule,
    FormsModule,
    HomeModule,
    NavigationDestinationModule,
    HttpClientModule,
    MomentModule,
    ServiceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
  exports: [],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorHandler,
      multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
