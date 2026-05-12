import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class AppConfig {

  config = {
    name: "wmsAdminPanel",
    title: "wmsAPP",
    version: "1.0.0",

    apiUrl: {
      // backendUrl: "https://plg-stg-api.ideatolife.me/", // "https://plg-stg-api.ideatolife.me/",// "https://9753458d.ngrok.io/",
      backendUrl: "localhose",
    }
  };

  constructor() {
    if (environment.production) {
      // this.config.apiUrl.backendUrl = "https://plg-api.ideatolife.me/";
      this.config.apiUrl.backendUrl = "production url.";
    }
  }

  getConfig(): Object {
    return this.config;
  }
}

