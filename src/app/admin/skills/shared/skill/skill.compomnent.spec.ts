/**
 * Created by orjanertkjern on 24/08/2017.
 */
import { TestBed, async, RouterTestingModule } from 'vendor/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ExampleService } from 'app/shared/utility/example.service';
import { SkillComponent } from 'app/admin/skills/shared/skill/skill.component';

describe('Skill', () => {
  beforeEach(async(() => {
    // Example service mock


    TestBed.configureTestingModule({
      declarations: [
        SkillComponent
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

  it('should create the skill component', async(() => {
    const fixture = TestBed.createComponent(SkillComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});

