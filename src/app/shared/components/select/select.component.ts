import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, ControlContainer, Form, FormControl } from '@angular/forms';

@Component({
  selector: 'moonshot-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Output() inp = new EventEmitter()
  //login = new FormControl('')

   //form: FormGroup;

  // Let Angular inject the control container
  // constructor(private controlContainer: ControlContainer) { }


  ngOnInit() {
    // Set our addressFormGroup property to the parent control
    // (i.e. FormGroup) that was passed to us, so that our
    // view can data bind to it
    // this.controlContainer.control
   
    // this.form = <FormGroup>this.controlContainer.control;
    // console.log(this.form.controls['login'].value)
  }

  inputText(value) {
   // this.inp.emit(value);

   // console.log(this.form)
  }

}
