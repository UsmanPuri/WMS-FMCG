import { NgModule } from "@angular/core";



import { LocalStorageService } from "../../helpers/services/local-storage.service";
import { EnvironmentUrlService } from "../../helpers/services/environment-url.service";
import { ErrorHandlerService } from "../../helpers/services/error-handler.service";
import { RepositoryService } from "../../helpers/services/repository.service";
import { SessionStorageService } from "../services/session-storage.service";




@NgModule({
  declarations: [
    
  ],
  imports: [
    
  ],
  exports: [
  ],
  entryComponents: [
  ],
  providers: [
    LocalStorageService,
    ErrorHandlerService,
    EnvironmentUrlService,
    RepositoryService,
    SessionStorageService
  ]
})
export class SharedModule { }
