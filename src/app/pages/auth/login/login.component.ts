import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'moonshot-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      login: new FormControl('', [Validators.required])
    });
  }


  submitHandler(){
    console.log(this.form.value);
    console.log('this.form.value');
  }

  inputHandler(value) {
    this.form.controls['login'].setValue(value);
    // this.form.controls['login'].touched = true;
    console.log(this.form.value);
    console.log(value);
  }

}
