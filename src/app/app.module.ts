import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MomentModule } from 'angular2-moment';


import { AppRouterModule } from './app.routes';
import { AppComponent } from './app.component';
import { ErrorModule } from './error/error.module';

// Module
import { LoginModule } from './Login/shared/login.module';
import { AdminModule } from './admin/shared/admin.module';
import { ServiceModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule, BrowserModule, ErrorModule,
    MomentModule,
    LoginModule, AdminModule, ServiceModule, HomeModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
