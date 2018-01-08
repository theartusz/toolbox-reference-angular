import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';


@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule
    ],
    declarations: [
    ],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, RouterModule
    ],
    providers: []
})

export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
