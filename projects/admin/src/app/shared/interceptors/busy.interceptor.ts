import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BusyServiceDisablingMarker } from '@common/generated-api/request-builder';
import { BusyService } from '@shared/services/busy.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class BusyInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const disableHeader = req.headers.has(BusyServiceDisablingMarker);
    if (disableHeader) {
      return next.handle(req);
    } else {
      const msg = `${req.method} ${req.url}`;
      this.busyService.increment(msg);
      return next.handle(req).pipe(
        finalize(() => {
          this.busyService.decrement();
        }),
      );
    }

  }
}
