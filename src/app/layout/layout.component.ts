import {
  Component, ElementRef, HostBinding, Inject, OnDestroy, OnInit, Renderer2, ViewEncapsulation, ViewChild
} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import * as ROUTE_LIST from "../helpers/constants/routes-list";



@Component({
  selector: "wms-main",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],

})
export class MainComponent {
  public routList = ROUTE_LIST;
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // this.redirectToDashboard();
  }

  public redirectToDashboard(){
    this.router.navigate([this.routList.DASHBOARD]);
  }

}
