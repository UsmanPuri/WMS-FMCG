import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainComponent} from "./layout.component";
import {FooterComponent} from "./footer/footer.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ROUTES} from "./layout.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SharedModule } from "../helpers/modules/shared.module";
import { CanActivateGuard } from "../helpers/guards/can-activate.guard";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DashboardService } from "./content/dashboard/services/dashboard.service";
import { AuthenticationService } from "../authentication/login/authentication-service";
import { ChatWindowComponent } from './chat/chat-window.component';




@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    HeaderComponent,
    SideBarComponent,
    ChatWindowComponent
  ],
  imports: [
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 5000,  
    }),
    
  ],
  exports: [
    MainComponent
  ],
  providers: [
    DashboardService, AuthenticationService, CanActivateGuard,
   
  ]
})

export class LayoutModule {
}
