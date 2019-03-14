
// services
import { TranslateService } from '@ngx-translate/core';
import { ValidatorService } from 'app/shared/utility/validation.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'boilerplate-form-group',
  templateUrl: 'form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  exampleForm: FormGroup;
  text: string;
  first_search: string;
  tel: number;
  personal_number: number;
  email: string;
  password: string;
  repeatPassword: string;
  domain: string;
  url: string;
  input_label: string;
  dropdownModel: string;
  dropdownExample: any[];

  constructor(private fb: FormBuilder, public translate: TranslateService, public validationService: ValidatorService) {
    this.exampleForm = this.fb.group({
      first_search: ['', Validators.required],
      text: ['', Validators.required],
      tel: ['', Validators.compose([Validators.required, this.validationService.isValidPhoneFormBuilder])],
      personal_number: ['', Validators.compose([Validators.required, this.validationService.isValidPersonalNumber])],
      email: ['', Validators.compose([Validators.required, this.validationService.emailValidator])],
      password: ['', Validators.compose([Validators.required, this.validationService.isValidPasswordFormBuilder])],
      repeatPassword: ['', Validators.required],
      domain: ['', Validators.required],
      url: ['', Validators.required],
      input_label: ['', Validators.required],
    }, {
        validator: this.validationService.matchPassword, // your validation method
      });

    this.dropdownExample = [
      this.translate.instant('form.dropdown.exampleOne'),
      this.translate.instant('form.dropdown.exampleTwo'),
      this.translate.instant('form.dropdown.exampleThree'),
    ];
  }

  ngOnInit() {

  }

  SubmitData(exampleForm: NgForm) {
    console.log(exampleForm.value);
  }

}
