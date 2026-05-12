import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class RepositoryService {
  protected _envUrl: EnvironmentUrlService;
  protected http: HttpClient;

  constructor(injector: Injector) {
    this._envUrl = injector.get(EnvironmentUrlService);
    this.http = injector.get(HttpClient);
   }

  public getData(route: string) {
    var url = this.createCompleteRoute(route, this._envUrl.urlAddress);
    return this.http.get(url);
  }

  public getLogin(route: string, body) {
    return this.http.get(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }
  public getAll(route: string, body:any) {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, this.generateHeaders());
  }

  public create(route: string, body) {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), body, this.generateHeaders());
  }

  public getKeyPair(route: string, model) {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), model, this.generateHeaders());
  }

  public getKeyPairWithOutModel(route: string) {
    return this.http.post(this.createCompleteRoute(route, this._envUrl.urlAddress), this.generateHeaders());
  }


  public update(route: string, body){
    return this.http.put(this.createCompleteRoute(route, this._envUrl.urlAddress), body, this.generateHeaders());
  }

  public delete(route: string){
    return this.http.delete(this.createCompleteRoute(route, this._envUrl.urlAddress));
  }

  protected createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}${route}`;
  }

  protected generateHeaders() {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}
