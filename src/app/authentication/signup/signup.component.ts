import {Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { BaseComponent } from 'src/app/helpers/components/base.component';
import { ChangePasswordValidator } from './change-password-validator';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends BaseComponent implements OnInit {

  formGroup: FormGroup;
  myData: any[];

  constructor(private injector: Injector, private fb: FormBuilder,
    private _signup: SignupService) {
    super(injector);
    this.formGroup = fb.group({
      cmpName: ['', [Validators.required, Validators.minLength(3)]],
      cmpAddress: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', Validators.required],
      country: ['', Validators.required],
      contactNum: ['', Validators.required],
      contactPerson: ['', Validators.required],
      cmpEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cnfPassword: ['', Validators.required]
    },
      { validator: ChangePasswordValidator.passwordShouldMatch });
  }

  ngOnInit() {
  }

  get cmpName() { return this.formGroup.get('cmpName') };
  get cmpAddress() { return this.formGroup.get('cmpAddress') };
  get city() { return this.formGroup.get('city') };
  get country() { return this.formGroup.get('country') };
  get contactNum() { return this.formGroup.get('contactNum') };
  get contactPerson() { return this.formGroup.get('contactPerson') };
  get cmpEmail() { return this.formGroup.get('cmpEmail') };
  get password() { return this.formGroup.get('password') };
  get cnfPassword() { return this.formGroup.get('cnfPassword') };

  submitForm() {
    console.log(this.formGroup.value);

    let signupProfile: any = {
      NewCompanyName: this.formGroup.value.cmpName,
      CompanyAddress: this.formGroup.value.cmpAddress,
      CompanyCity: this.formGroup.value.city,
      CompanyCountry: this.formGroup.value.country,
      ContactNumber: this.formGroup.value.contactNum,
      ContactPerson: this.formGroup.value.contactPerson,
      RegEmail: this.formGroup.value.cmpEmail,
      NewPassword: this.formGroup.value.password,
    };

    debugger;
    let apiAddress: string = this.apiConstant.SIGNUPDEMOPROFILE;
    this._signup.create(apiAddress, signupProfile)
      .subscribe(res => {
        this.myData = res as any;
        console.log(this.myData);
        this.showToastrSuccess("Demo Account has successfully Created for 15 Days Trial");
        setTimeout(() => {
          this.router.navigate(['auth/login']);
        }, 2000);
      });


  }

  signIn(){
    this.router.navigate(['/auth/login']);
  }

}
