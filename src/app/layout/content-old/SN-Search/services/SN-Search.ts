import { Injectable, Injector } from '@angular/core';
import { throwError } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { HttpClient } from '@aspnet/signalr';
import { RepositoryService } from 'src/app/helpers/services/repository.service';

@Injectable({ 
  providedIn: 'root' 
})
export class SNSearchService extends RepositoryService {
  constructor(injector: Injector) {
    super(injector);
  }



}

