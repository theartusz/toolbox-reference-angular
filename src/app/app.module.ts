import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MomentModule } from 'angular2-moment';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


import {HttpInterceptorHandler} from './shared/interceptor/HttpInterceptorHandler';
import {NavigationDestinationModule} from './navigation-destination/navigation-destination.module';

// app component
import { AppComponent } from './app.component';

// Module
import { AppRouterModule } from './app.routes';
import { LoginModule } from './Login/shared/login.module';
import { AdminModule } from './admin/shared/admin.module';
import { ServiceModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import {ErrorModule} from './error/error.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AdminModule,
    AppRouterModule,
    BrowserModule,
    ErrorModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
    LoginModule,
    MomentModule,
    NavigationDestinationModule,
    ServiceModule,
    SharedModule,
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
