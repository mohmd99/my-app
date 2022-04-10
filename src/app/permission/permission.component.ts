import { TestService } from './../test.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css'],
})
export class PermissionComponent implements OnInit {
  @Input() permission: any;
  permissionForm: FormGroup;
  constructor(public TestService: TestService, private fb: FormBuilder) {}
  validationMessages = {
    fullName: {
      required: 'Full Name is required',
      minlength: 'Full Name must be greater than 2 characters',
      maxlength: 'Full Name must be less than 10 characters',
    },
  };
  formErrors = {
    fullName: '',
  };
  logValidation(group: FormGroup = this.permissionForm) {
    Object.keys(group.controls).forEach((key: string) => {
      const absCtrl = group.get(key);
      if (absCtrl instanceof FormGroup) {
        this.logValidation(absCtrl);
      } else {
        this.formErrors[key] = '';
        if (absCtrl && !absCtrl.valid && (absCtrl.touched || absCtrl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorkey in absCtrl.errors) {
            if (errorkey) {
              this.formErrors[key] += messages[errorkey] + ' ';
            }
          }
        }
      }
    });
  }
  name: any;
  contactPermission: any;
  ngOnInit(): void {
    this.TestService.getPermission().subscribe((data) => {
      this.permission = data;
    });
    this.permissionForm = this.fb.group({
      contactPermission: ['3'],
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
        ],
      ],
    });
    this.permissionForm.valueChanges!.subscribe((data) => {
      this.logValidation(this.permissionForm);
    });
  }
  onSubmit(): void {
    console.log(this.permissionForm);
    console.log(this.contactPermission);
  }
}
