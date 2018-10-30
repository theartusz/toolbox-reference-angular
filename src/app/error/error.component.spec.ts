/**
 * Created by orjanertkjern on 24/08/2017.
 */
import { TestBed, async, RouterTestingModule } from 'vendor/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorComponent } from 'app/error/error.component';

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

