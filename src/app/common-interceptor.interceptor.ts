import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './shared/auth.service';

@Injectable()
export class CommonInterceptorInterceptor implements HttpInterceptor {

  constructor(private authServ:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = JSON.parse(localStorage.getItem('jwt_token'))
    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return next.handle(request);
  }
}
