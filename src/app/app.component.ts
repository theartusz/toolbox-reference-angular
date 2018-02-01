import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'boilerplate-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['nb']);
    translate.setDefaultLang('nb');
    translate.use('nb');
  }
}
