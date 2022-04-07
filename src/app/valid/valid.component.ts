import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent implements OnInit {

  title = 'dummyApp-dynamicValidation';

  dummyForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    /* 4. Initialize Form */


}
formErrors = {
  'email':'',
  'phone':''
}
}
