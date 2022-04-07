import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  hides = true;
  hide = true;
  password: string;
  cpassword: string;
  constructor() {}

  ngOnInit(): void {}
  specialChars = '!@#$%^&*()-_=+[{]}\\|;:\',"<.>/?`~';
  specialChar: boolean = true;
  equal() {
    this.password != this.cpassword;
  }
  special() {
    this.specialChar = true;
    for (let i = 0; i < this.password?.length; i++) {
      for (var j = 0; j < this.specialChars.length; j++) {
        if (this.password[i] == this.specialChars[j]) {
          this.specialChar = false;
        }
      }
    }
    return this.specialChar;
  }

  hasNumber: boolean;
  hasLower: boolean;
  hasUpper: boolean;
  nums() {
    this.hasNumber = /\d/.test(this.password);
    return !this.hasNumber;
  }
  spanShow() {
    if (
      this.specialChar == false &&
      this.hasNumber == true &&
      this.password?.length >= 8 &&
      this.hasLower == true &&
      this.hasUpper == true
    ) {
      return false;
    } else {
      return true;
    }
  }
  Lower() {
    this.hasLower = /[a-z]/.test(this.password);
    return !this.hasLower;
  }
  Upper() {
    this.hasUpper = /[A-Z]/.test(this.password);
    return !this.hasUpper;
  }
  length() {
    if (this.password?.length < 8) {
      return true;
    } else {
      return false;
    }
  }
}
