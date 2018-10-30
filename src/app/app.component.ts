import { Component } from 'vendor/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'boilerplate-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
