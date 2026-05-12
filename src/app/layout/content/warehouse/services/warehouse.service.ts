import { Injectable, Injector } from '@angular/core';
import { throwError } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { RepositoryService } from 'src/app/helpers/services/repository.service';

@Injectable()
export class WarehouseService extends RepositoryService {
  constructor(injector: Injector) {
    super(injector);
  }



}

