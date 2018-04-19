import { Injectable, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from 'vendor/angular';
import { Observable } from 'vendor/rxJs';

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
