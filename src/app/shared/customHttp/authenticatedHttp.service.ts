import { Injectable, Injector } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';


// Services
import { SpinnerService } from '../spinner/spinner.service';

@Injectable()
export class AuthenticatedHttpService extends Http {

  token: string;
  constructor(backend: XHRBackend, defaultOptions: RequestOptions,
    private injector: Injector, private spinnerService: SpinnerService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    const token = this.getToken('auth_token');
    if (token) {
      if (url instanceof Request) {
        url.headers.set('Authorization', `Bearer ${token}`);
      }
    }
    this.spinnerService.startRequest();
    return super.request(url, options)
      .catch((error: Response) => {
        // tslint:disable-next-line:max-line-length
        if ((error.status === 401 || error.status === 403 || error.status === 500) && (window.location.href.match(/\?/g) || []).length < 2) {
          console.log(error);
        }
        return Observable.throw(error);
      })
      .finally(() => {
        this.spinnerService.endRequest();
      });
  }

  public get router(): Router { // this creates router property on your service.
    return this.injector.get(Router);
  }

  getToken(key: string) {
    return localStorage.getItem(key);
  }

}
