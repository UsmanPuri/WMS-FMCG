import { Injectable, Injector } from '@angular/core';
import { RepositoryService } from 'src/app/helpers/services/repository.service';

@Injectable()
export class WMSTenderService extends RepositoryService {
  constructor(injector: Injector) {
    super(injector);
  }



}

