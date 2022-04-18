import { Ipermission } from './../permission';
import { TestService } from './../test.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
  // logValidation(group: FormGroup = this.permissionForm) {
  //   Object.keys(group.controls).forEach((key: string) => {
  //     const absCtrl = group.get(key);
  //     if (absCtrl instanceof FormGroup) {
  //       this.logValidation(absCtrl);
  //     } else {
  //       this.formErrors[key] = '';
  //       if (absCtrl && !absCtrl.valid && (absCtrl.touched || absCtrl.dirty)) {
  //         const messages = this.validationMessages[key];
  //         for (const errorkey in absCtrl.errors) {
  //           if (errorkey) {
  //             this.formErrors[key] += messages[errorkey] + ' ';
  //           }
  //         }
  //       }
  //     }
  //   });
  // }
  name: any;
  checkbox: FormGroup;
  myForm: FormGroup;
  x: any;
  get f() {
    return this.myForm.controls;
  }
  get t() {
    return this.f['per'] as FormArray;
  }
  get ticketFormGroups() {
    return this.t.controls as FormGroup[];
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      per: new FormArray([]),
    });
    this.TestService.getPermission().subscribe((data) => {
      this.permission = data;
      for (const per of this.permission) {
          this.t.push(
            this.fb.group({

            })
          );



      }
    });
  }

  onSubmit(): void {
    console.log(this.myForm);
  }
}
