import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

/**
 * The following class is intercepting the HTTP-request.
 * Make it possible to grab HTML status codes etc for instance logging or error handling.
 */
@Injectable()
export class HttpInterceptorHandler implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
