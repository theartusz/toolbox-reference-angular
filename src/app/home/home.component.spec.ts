import {TestBed, async} from '@angular/core/testing';

import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './home.component';
import {GreeterComponent} from './greeter/greeter.component';
import {ExampleService} from '../services/example.service';
import {Observable} from 'rxjs/Observable';

describe('HomeComponent', () => {

  class ExampleServiceStub {
    serviceExampleFunction(): Observable<boolean> {
      return Observable.of(true);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        GreeterComponent
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        [ {provide: ExampleService, useClass: ExampleServiceStub } ]
      ]
    }).compileComponents();
  }));

  it('should create the home component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
