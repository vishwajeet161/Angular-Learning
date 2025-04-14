import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor', req);
  // const newRequest = req.clone({headers: new HttpHeaders({token:'1234567890'})})
  

  if(req.method === 'POST'){
    const newRequest = req.clone({headers: new HttpHeaders({token:'1234567890'})})
    return next(newRequest);
  }
  return next(req);
};
