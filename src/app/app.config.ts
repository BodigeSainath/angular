import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth-interceptor';
import { retry } from 'rxjs';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { errorInterceptorInterceptor } from './interceptors/error-interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
      //  provideHttpClient(withInterceptors([authInterceptor,
      //   // retryInterceptor,
      //   errorInterceptorInterceptor
      // ]))

  ]
};
