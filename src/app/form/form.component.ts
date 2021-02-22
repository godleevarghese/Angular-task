import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  profileForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService
  ) {
    this.profileForm = this.formBuilder.group({
      userName: [
        '',
        [Validators.required, Validators.pattern('[a-z0-9]{8,20}')],
      ],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      mobile: [null, [Validators.required, Validators.pattern('[0-9]{10}')]],
    });
  }

  ngOnInit(): void {}

  submit() {
    if (!this.profileForm.valid) {
      return;
    }
    this.formService.sentData(this.profileForm.value);
    console.log('Form data is:  ' + JSON.stringify(this.profileForm.value));

    // this.profileForm.markAsPristine()
    // this.profileForm.markAsUntouched()
    this.profileForm.reset();
  }
}
