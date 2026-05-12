import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token: string = "";
    constructor(private localStService: LocalStorageService,
        private sessionStService: SessionStorageService) {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.token = this.localStService.getToken();
        const token = this.token; // you probably want to store it in localStorage or something
        if (!token) {
            return next.handle(req);
        }

        const req1 = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`),
        });

        return next.handle(req1);
    }

}