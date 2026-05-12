import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
 
@Injectable()
export class EnvironmentUrlService {
  
  // public urlAddress: string = environment.urlAddress + "/api";
  public urlAddress: string = environment.environment + "/api";
 
  constructor() { }
 
}