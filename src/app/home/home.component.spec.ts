import { TranslateModule } from '@ngx-translate/core';

// components
import { HomeComponent } from 'app/home/home.component';
import { GreeterComponent } from 'app/home/shared/greeter/greeter.component';

// services
import { ExampleService } from 'app/shared/utility/example.service';
import {Observable, of} from 'rxjs';
import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

// pipe

describe('HomeComponent', () => {

  class ExampleServiceStub {
    serviceExampleFunction(): Observable<boolean> {
      return of(true);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        GreeterComponent,
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        [{ provide: ExampleService, useClass: ExampleServiceStub }],
      ],
    }).compileComponents();
  }));

  it('should create the home component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
