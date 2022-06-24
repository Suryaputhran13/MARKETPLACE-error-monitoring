import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  urlPath: string = '';

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const { BASEURL }: any = environment;

    if (localStorage.getItem('tokenDetails')) {
      let tokenString: any = (localStorage.getItem('tokenDetails')) ? localStorage.getItem('tokenDetails') : ''
      let tokenDetails = JSON.parse(tokenString);
      request = request.clone({
        setHeaders: {
          authToken: `${tokenDetails.secretKey}`
        }
      });
    }
    this.urlPath = `${URL}${request.url}`;
    const Request = request.clone({ url: this.urlPath });
    return next.handle(Request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event.status);
        }
        return event;
      }));
  }
}
