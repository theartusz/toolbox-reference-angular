/**
 * Created by orjanertkjern on 24/08/2017.
 */
import {TestBed, async} from '@angular/core/testing';

import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';
import {ExampleService} from '../../services/example.service';
import {AdminDashboardComponent} from './admin-dashboard.component';

describe('AdminComponent test', () => {
  beforeEach(async(() => {
    // Example service mock


    TestBed.configureTestingModule({
      declarations: [
        AdminDashboardComponent
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        ExampleService
      ]
    }).compileComponents();
  }));

  it('should create the admin component', async(() => {
    const fixture = TestBed.createComponent(AdminDashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render link', async(() => {
    const fixture = TestBed.createComponent(AdminDashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').innerText).toContain('Link 1');
  }));
});

