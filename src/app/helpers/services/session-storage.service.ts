import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  
  private user: any;

  constructor() { }

  get(key: string): any {
    return this.getDataInSessionStorage(key);
  }
  set({ key, value }): void {
    this.setDataInSessionStorage({ key, value });
  }
  setDataInSessionStorage({ key, value }) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  getDataInSessionStorage(key: string) {
    if (key === "StartupKeyPairSelection") {
      key = "CompanyId";
    }
    const item = sessionStorage.getItem(key);
    if (item) {
      return JSON.parse(sessionStorage.getItem(key));
    }

    return null;
  }
  remove(key: string) {
    sessionStorage.removeItem(key);
  }
  clearDataInSessionStorage() {
    sessionStorage.clear();
  }
  getToken() {
    return this.getDataInSessionStorage("wms_token");
  }
  getCompanyId() {
    return this.getDataInSessionStorage("CompanyId");
  }
  getBusinessUnitId() {
    return this.getDataInSessionStorage("BusinessUnitId");
  }
  getCompanyName(){
    return this.getDataInSessionStorage("CompanyName");
  }
  getBusinessUnitName(){
    return this.getDataInSessionStorage("BusinessUnitName");
  }
  getFinancialYearId() {
    return this.getDataInSessionStorage("FinancialYearId");
  }
  getUserId() {
    this.user = this.getDataInSessionStorage("user");
    return this.user["Login"];
  }

  getSessionStorageLength() {
    return sessionStorage.length;
  }

}
