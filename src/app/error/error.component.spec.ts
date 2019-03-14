import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from 'app/error/error.component';
import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AdminComponent test', () => {
  beforeEach(async(() => {
    // Example service mock


    TestBed.configureTestingModule({
      declarations: [
        ErrorComponent,
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [],
    }).compileComponents();
  }));

  it('should create the admin component', async(() => {
    const fixture = TestBed.createComponent(ErrorComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

