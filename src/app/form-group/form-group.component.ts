import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, NgForm} from '@angular/forms';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'boilerplate-form-group',
  templateUrl: 'form-group.component.html',
  styleUrls: ['form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  exampleForm: FormGroup;
  input_text: string;
  first_search: string;
  second_search: string;
  input_tel: number;
  input_email: string;
  input_password: string;
  input_domain: string;
  input_url: string;
  input_label: string;
  dropdownModel: string;
  dropdownExample: any[];

  constructor(private fb: FormBuilder, public translate: TranslateService) {
    this.exampleForm = this.fb.group({
      first_search: new FormControl(),
      second_search: new FormControl(),
      input_text: ['', Validators.required],
      input_tel: ['', Validators.required],
      input_number: ['', Validators.required],
      input_email: ['', Validators.required],
      input_password: ['', Validators.required],
      input_domain: ['', Validators.required],
      input_url: ['', Validators.required],
      input_label:  ['', Validators.required]
    }, {updateOn: 'blur' });

    this.dropdownExample = [
      this.translate.instant('form.dropdown.exampleOne'),
      this.translate.instant('form.dropdown.exampleTwo'),
      this.translate.instant('form.dropdown.exampleThree')
    ];
  }

  ngOnInit() {

  }

  SubmitData(exampleForm: NgForm) {
    console.log(exampleForm.controls);
  }

}
