import { Injectable, Injector } from '@angular/core';
import { RepositoryService } from 'src/app/helpers/services/repository.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService extends RepositoryService {

  constructor(injector: Injector) { 
    super(injector);
  }
}
