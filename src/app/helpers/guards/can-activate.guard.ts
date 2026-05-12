import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router/src/router_state";
import { AuthenticationService } from "../../authentication/login/authentication-service";

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  /**
   * The following checks if the access can be provided or not to the current user
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl("auth/login")
        .then()
        .catch();
    }
    return false;
  }
}
