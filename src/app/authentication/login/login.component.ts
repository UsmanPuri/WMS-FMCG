import { Component, Injector, OnInit, Renderer2, Inject } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";
import { BaseComponent } from "../../helpers/components/base.component";
import { AuthenticationService } from "./authentication-service";
import { Login } from "src/app/helpers/models/Login";
import { DOCUMENT } from '@angular/common';
import { User } from "src/app/helpers/models/User";
import { AppInitService } from "../../helpers/services/app-init.service";
import { environment } from './../../../environments/environment';
import { EnvironmentUrlService } from "src/app/helpers/services/environment-url.service";
@Component({
  selector: "wms-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent extends BaseComponent implements OnInit {
  user: User;
  constructor(@Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private injector: Injector, private _authenticationService: AuthenticationService, 
    public appLoadService: AppInitService, public environmentUrlService: EnvironmentUrlService) {
    super(injector);
  }

  ngOnInit() {
    this.renderer.addClass(this.document.body, 'login-page');
    this.addFormValidations();
  }

  /**
   * The following method is used to add the form validations
   */
  addFormValidations(): void {
    const emailValidations: ValidatorFn[] = [Validators.required];
    const passwordValidations: ValidatorFn[] = [Validators.required];

    // adding validations to the login form
    this.addFormControlWithValidations("email", emailValidations);
    this.addFormControlWithValidations("password", passwordValidations);
  }

  public login(loginFormValue) {
    let login: Login = {
      Username: loginFormValue.email,
      Password: loginFormValue.password
    }

    this.localStorageService.remove('wms_token');
    localStorage.removeItem('modelData');

    this._authenticationService.authenticate(login)
      .subscribe(res => {
        // debugger
        // console.log(res);
        this.localStorageService.setDataInLocalStorage({ key: "wms_token", value: res["token"] });

        this.sessionStorageService.setDataInSessionStorage({ key: "wms_token", value: res["token"] });
        this.user = res["user"] as User;
        
        this.localStorageService.setDataInLocalStorage({ key: "user", value: this.user });

        this.user = res["user"] as User;
        
        this.localStorageService.setDataInLocalStorage({ key: "user", value: this.user });
        // this.router.navigate([this.routesList.DASHBOARD]);

        this.sessionStorageService.setDataInSessionStorage({ key: "wms_token", value: res["token"] });
        // this.user = res["user"] as User;
        
        this.sessionStorageService.setDataInSessionStorage({ key: "user", value: this.user });
        this.router.navigate([this.routesList.DASHBOARD]);
      },
        (error => {
          this.errorHandler.handleError(error);
          this.errorMessage = this.errorHandler.errorMessage;
          if(error.status == 401){
            this.showToastrError("Invalid User Email Or Password... Please Try Again...");
          }
          else
          {
            this.environmentUrlService.urlAddress = " http://43.248.13.48:9995/api";
            this.appLoadService.initAlter();
            this._authenticationService.authenticate(login);
            // this.showToastrError("Invalid Backend Server");
          }
          
        })
      )
  }

  signup() {
    this.router.navigate(['signup'])
  }

}
