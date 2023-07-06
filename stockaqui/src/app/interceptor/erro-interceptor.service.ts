import { Injectable } from '@angular/core';
import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest, 
  HttpErrorResponse}
from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { MensagemService } from 'src/app/shared/services/mensagem.service';


@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private mensagemService: MensagemService) {}

  intercept( request: HttpRequest<any>, next: HttpHandler ):Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
        catchError((error: HttpErrorResponse) => {
            let errorMsg = '';
            if (error.error instanceof ErrorEvent) {
                console.log('This is client side error');
                errorMsg = `Error: ${error.error.message}`;
            } else {
                this.mensagemService.error(error.error.message);
                errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
            }
            console.log(errorMsg);
            return throwError(errorMsg);
        })
    )
  }

}