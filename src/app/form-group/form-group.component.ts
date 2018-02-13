import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'boilerplate-form-group',
  templateUrl: 'form-group.component.html',
  styleUrls: ['form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  userForm: FormGroup;
  surname: string;
  givenName: string;
  email: string;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      givenName: ['', Validators.required],
      surName: ['', Validators.required],
      email: ['', Validators.required],
    }, {updateOn: 'blur' });
  }

  formExample(userFormData: any) {

  }

}
