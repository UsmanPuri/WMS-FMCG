import { Injectable } from "@angular/core";
@Injectable()
export class LocalStorageService {
  private user: any;
  get(key: string): any {
    return this.getDataInLocalStorage(key);
  }

  set({ key, value }): void {
    this.setDataInLocalStorage({ key, value });
  }

  setDataInLocalStorage({ key, value }) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getDataInLocalStorage(key: string) {
    if (key === "StartupKeyPairSelection") {
      key = "CompanyId";
    }
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(localStorage.getItem(key));
    }

    return null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clearDataInLocalStorage() {
    localStorage.clear();
  }

  getToken() {
    return this.getDataInLocalStorage("wms_token");
  }

  getCompanyId() {
    return this.getDataInLocalStorage("CompanyId");
  }
  getBusinessUnitId() {
    return this.getDataInLocalStorage("BusinessUnitId");
  }
  getCompanyName(){
    return this.getDataInLocalStorage("CompanyName");
  }
  getBusinessUnitName(){
    return this.getDataInLocalStorage("BusinessUnitName");
  }
  getFinancialYearId() {
    return this.getDataInLocalStorage("FinancialYearId");
  }
  getUserId() {
    this.user = this.getDataInLocalStorage("user");
    return this.user["Login"];
  }

  getLocalStorageLength() {
    return localStorage.length;
  }


}

