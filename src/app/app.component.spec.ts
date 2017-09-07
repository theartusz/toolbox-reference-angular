import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';
import {GreeterComponent} from './home/greeter/greeter.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GreeterComponent
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the app component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
