import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoaderService } from '../_services/loader.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private count = 0;
  constructor(private loaderService: LoaderService) {}
  /*
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(request);
    }
  */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.count === 0) {
      this.loaderService.setHttpProgressStatus(true);
    }
    this.count++;
    return next.handle(req).pipe(
      tap({
        next: ()=>{},
        error: (error:any) => {
          console.log(error);
        },
        finalize:() => {
          this.count--;
          if (this.count === 0) {
            this.loaderService.setHttpProgressStatus(false);
          }
        },
      })
    );
  }
}
