import { TranslateModule } from '@ngx-translate/core';
import { GreeterComponent } from 'app/home/shared/greeter/greeter.component';
import { ExampleService } from 'app/shared/utility/example.service';
import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    // Example service mock


    TestBed.configureTestingModule({
      declarations: [
        GreeterComponent,
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        ExampleService,
      ],
    }).compileComponents();
  }));

  it('should create the greeter component', async(() => {
    const fixture = TestBed.createComponent(GreeterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 and', async(() => {
    const fixture = TestBed.createComponent(GreeterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').innerText).toContain('home.welcome');
  }));
});

