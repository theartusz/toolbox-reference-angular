/**
 * Created by orjanertkjern on 24/08/2017.
 */
import {TestBed, async} from '@angular/core/testing';

import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from '@angular/router/testing';
import {ExampleService} from '../../services/example.service';
import {SkillComponent} from './skill.component';

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

