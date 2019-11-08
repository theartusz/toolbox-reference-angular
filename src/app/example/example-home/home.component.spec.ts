import { TranslateModule } from '@ngx-translate/core';

// components
import { HomeComponent } from 'src/app/example/example-home/home.component';

// services
import { Observable, of } from 'rxjs';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ExampleCoreModule } from '../example-core/example-core.module';

// pipe

describe('HomeComponent', () => {
  class ExampleServiceStub {
    serviceExampleFunction(): Observable<boolean> {
      return of(true);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule, TranslateModule.forRoot(), ExampleCoreModule],
    }).compileComponents();
  }));

  it('should create the home component', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
