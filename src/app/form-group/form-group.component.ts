import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {ValidatorService} from '../services/validation.service';

@Component({
  selector: 'boilerplate-form-group',
  templateUrl: 'form-group.component.html',
  styleUrls: ['form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  exampleForm: FormGroup;
  input_text: string;
  first_search: string;
  input_tel: number;
  input_number: number;
  input_email: string;
  input_password: string;
  input_domain: string;
  input_url: string;
  input_label: string;
  dropdownModel: string;
  dropdownExample: any[];

  constructor(private fb: FormBuilder, public translate: TranslateService, public validationService: ValidatorService) {
    this.exampleForm = this.fb.group({
      first_search: ['', Validators.required],
      input_text: ['', Validators.required],
      input_tel: ['', Validators.compose([Validators.required, this.validationService.isValidPhoneFormBuilder])],
      input_number: ['', Validators.required],
      input_email: ['', Validators.compose([Validators.required, this.validationService.emailValidator])],
      input_password: ['', Validators.compose([Validators.required, this.validationService.isValidPasswordFormBuilder])],
      input_domain: ['', Validators.required],
      input_url: ['', Validators.required],
      input_label:  ['', Validators.required]
    });

    this.dropdownExample = [
      this.translate.instant('form.dropdown.exampleOne'),
      this.translate.instant('form.dropdown.exampleTwo'),
      this.translate.instant('form.dropdown.exampleThree')
    ];
  }

  ngOnInit() {

  }

  SubmitData(exampleForm: NgForm) {
    console.log(exampleForm.value);
  }

}
