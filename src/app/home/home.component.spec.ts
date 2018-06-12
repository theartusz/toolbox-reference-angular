import { TestBed, async, RouterTestingModule } from 'vendor/angular';
import { Observable } from 'vendor/rxJs';
import { TranslateModule } from '@ngx-translate/core';

// components
import { HomeComponent } from 'app/home/home.component';
import { GreeterComponent } from 'app/home/shared/greeter/greeter.component';

// services
import { ExampleService } from 'app/shared/utility/example.service';

// pipe
import { DatexPipe } from 'app/shared/pipes/datex.pipe';

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
        GreeterComponent,
        DatexPipe
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        [{ provide: ExampleService, useClass: ExampleServiceStub }]
      ]
    }).compileComponents();
  }));

  it('should create the home component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
