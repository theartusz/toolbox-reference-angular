/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormGroupComponent} from './form-group.component';
import {ValidatorService} from '../services/validation.service';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';


describe('FormGroupComponent', () => {
  beforeEach(() => {

    /** Setting up testing */
    TestBed.configureTestingModule({
      declarations: [
        FormGroupComponent
      ],
      imports: [
        BrowserModule,
        RouterModule,
        RouterTestingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forRoot()
      ],
      providers: [
        [
          ValidatorService,                // No backend service, only validation. Therefore no mocking of object.
        ]
      ],
      schemas: [
        [NO_ERRORS_SCHEMA]
      ]
    });
    TestBed.compileComponents();
  });

  /** actual tests */
  it('should create the user details component', async(() => {
    const fixture = TestBed.createComponent(FormGroupComponent);
    const formGroupComponent = fixture.debugElement.componentInstance;
    expect(formGroupComponent).toBeTruthy();
  }));

  it('should be invalid form because of invalid phone number', async(() => {
    const fixture = TestBed.createComponent(FormGroupComponent);
    const formGroupComponent = fixture.debugElement.componentInstance;
    formGroupComponent.ngOnInit();
    formGroupComponent.exampleForm.controls['tel'].setValue('00000');
    expect(formGroupComponent.exampleForm.controls['tel'].status).toBe('INVALID');
  }));

  it('should be invalid form because of invalid person number', async(() => {
    const fixture = TestBed.createComponent(FormGroupComponent);
    const formGroupComponent = fixture.debugElement.componentInstance;
    formGroupComponent.ngOnInit();
    formGroupComponent.exampleForm.controls['personal_number'].setValue('00000');
    expect(formGroupComponent.exampleForm.controls['personal_number'].status).toBe('INVALID');
  }));

  it('should be invalid form because of invalid email', async(() => {
    const fixture = TestBed.createComponent(FormGroupComponent);
    const formGroupComponent = fixture.debugElement.componentInstance;
    formGroupComponent.ngOnInit();
    formGroupComponent.exampleForm.controls['email'].setValue('invalid.email.com');
    expect(formGroupComponent.exampleForm.controls['email'].status).toBe('INVALID');
  }));

  it('should be invalid form because of invalid password', async(() => {
    const fixture = TestBed.createComponent(FormGroupComponent);
    const formGroupComponent = fixture.debugElement.componentInstance;
    formGroupComponent.ngOnInit();
    formGroupComponent.exampleForm.controls['password'].setValue('dårlig');
    formGroupComponent.exampleForm.controls['repeatPassword'].setValue('dårlig');
    expect(formGroupComponent.exampleForm.controls['password'].status).toBe('INVALID');
  }));


  it('should be validForm', async(() => {
    const fixture = TestBed.createComponent(FormGroupComponent);
    const formGroupComponent = fixture.debugElement.componentInstance;
    formGroupComponent.ngOnInit();
    formGroupComponent.exampleForm.controls['search'].setValue('Test');
    formGroupComponent.exampleForm.controls['text'].setValue('Testeren');
    formGroupComponent.exampleForm.controls['tel'].setValue('47474747');
    formGroupComponent.exampleForm.controls['person_number'].setValue('00000000000');
    formGroupComponent.exampleForm.controls['email'].setValue('valid@email.com');
    formGroupComponent.exampleForm.controls['password'].setValue('BraPassord123');
    formGroupComponent.exampleForm.controls['repeatPassword'].setValue('BraPassord123');
    formGroupComponent.exampleForm.controls['domain'].setValue('yourdomain.com');
    formGroupComponent.exampleForm.controls['url'].setValue('http://yourdomain.com');
    formGroupComponent.exampleForm.controls['input_label'].setValue('1050');
    expect(formGroupComponent.exampleForm.valid).toBeTruthy();
  }));
});
