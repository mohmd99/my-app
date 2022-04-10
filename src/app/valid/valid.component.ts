import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valid',
  templateUrl: './valid.component.html',
  styleUrls: ['./valid.component.css']
})
export class ValidComponent implements OnInit {
employeeForm:FormGroup;
validationMessages = {
  'fullName':{
    'required':'Full Name is required',
    'minlength':'Full Name must be greater than 2 characters',
    'maxlength':'Full Name must be less than 10 characters'
  },
  'email':{
'required':'Email is required'
  },
  'phone':{
    'required':'Phone is required'
      },

}
formErrors={
  'fullName':'',
  'email':'',
  'phone':''
}

  constructor(private fb:FormBuilder) {}

  ngOnInit() {
this.employeeForm= this.fb.group({
fullName: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]],
email:['',Validators.required],
phone:[''],
contactPreference:['email']
});
this.employeeForm.get('contactPreference').valueChanges!.subscribe((data :string)=>{
this.onContactPrefernceChange(data);
})
this.employeeForm.valueChanges!.subscribe((data)=>{
  this.logValidation(this.employeeForm)
})
}
logValidation(group:FormGroup = this.employeeForm){
  Object.keys(group.controls).forEach((key:string) =>{
    const absCtrl =group.get(key);
    if (absCtrl instanceof FormGroup){
      this.logValidation(absCtrl);
    } else {
      this.formErrors[key]='';
     if (absCtrl && !absCtrl.valid && (absCtrl.touched || absCtrl.dirty)) {
        const messages =this.validationMessages[key];
        for (const errorkey in absCtrl.errors) {
        if (errorkey){
          this.formErrors[key]+= messages[errorkey] +" "
        }

        }
     }
    }
  });
}
get fullName() { return this.employeeForm.get('fullName'); }
onSubmit():void {
  console.log(this.employeeForm)
}
onContactPrefernceChange(selectedValue: string) {
  const phoneFormControl = this.employeeForm.get('phone');
  const emailFormControl = this.employeeForm.get('email');
  if (selectedValue === 'phone') {
    phoneFormControl.setValidators(Validators.required);
    emailFormControl.clearValidators();
  } else {
    phoneFormControl.clearValidators();
     emailFormControl.setValidators(Validators.required);
  }
  phoneFormControl.updateValueAndValidity();
 emailFormControl.updateValueAndValidity();
}
}
