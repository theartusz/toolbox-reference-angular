/**
 * Created by orjanertkjern on 24/08/2017.
 */
import { TestBed, async, RouterTestingModule } from 'vendor/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleService } from 'app/shared/utility/example.service';
import { SkillsComponent } from 'app/admin/skills/skills.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    // Example service mock


    TestBed.configureTestingModule({
      declarations: [
        SkillsComponent
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

  it('should create the skills component', async(() => {
    const fixture = TestBed.createComponent(SkillsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});

