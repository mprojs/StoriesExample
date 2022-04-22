import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BusyInterceptor } from '@shared/interceptors/busy.interceptor';

export const httpInterceptorProviders = [
  addInterceptor(BusyInterceptor),
];

function addInterceptor<T>(interceptor: T) {
  return {
    provide: HTTP_INTERCEPTORS,
    useClass: interceptor,
    multi: true,
  };
}
