import { Injectable, Injector } from '@angular/core';
import { throwError } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from '../../helpers/services/environment-url.service';
import { LocalStorageService } from '../../helpers/services/local-storage.service';
import { SessionStorageService } from 'src/app/helpers/services/session-storage.service';

@Injectable()
export class AuthenticationService {
  constructor(private _envService: EnvironmentUrlService,
    private http: HttpClient, private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService) {
    
  }

  public authenticate(body){
    debugger
    return this.http.post(this.createCompleteRoute("/login/Authenticate", this._envService.urlAddress), body, this.generateHeaders());
  }

  private generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }

  private createCompleteRoute(route: string, envAddress: string) {
    debugger
    return `${envAddress}${route}`;
  }

  public isLoggedIn(): boolean {
    return (
      this.sessionStorageService.get("wms_token")
    );
  }

}

