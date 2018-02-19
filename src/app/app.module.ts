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
import { ServiceModule } from './services/shared/services.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import {ErrorModule} from './error/error.module';
import {FormGroupModule} from './form-group/form-group.module';
import { GoogleMaterialModule } from './google-material/google-material.module';

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
    FormGroupModule,
    HomeModule,
    HttpClientModule,
    LoginModule,
    MomentModule,
    NavigationDestinationModule,
    ServiceModule,
    SharedModule,
    GoogleMaterialModule,
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
