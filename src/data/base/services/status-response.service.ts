import { Injectable } from '@angular/core';
import { messages } from '../constants/messages';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import {IResultApi} from '../interfaces/IResultApi';
@Injectable({ providedIn: 'root' })
export class StatusResponseService {
  constructor() { }

  error<T>(httpErrorResponse: any): IResponseStatusViewModel<T> {
    let { error, ok, status, StatusCode } = httpErrorResponse;
    let responseStatus: IResponseStatusViewModel<T> = <IResponseStatusViewModel<T>>{}
    if (StatusCode) {
      if (StatusCode == 404 || StatusCode == 500) {
        responseStatus = { message: error.Message, statusCode: StatusCode, ok }
      }
    } else {
      if (status == 0) {
       
        // Validación específica para net::ERR_CONNECTION_REFUSED
        if (error?.name === 'HttpErrorResponse' && error?.statusText === 'Unknown Error') {
          responseStatus = { 
            message: 'Error: Conexión rechazada (ERR_CONNECTION_REFUSED)', 
            statusCode: status, 
            ok: false 
          };
        } else if (httpErrorResponse.name === "HttpErrorResponse" && error.message === "Failed to fetch") {
          responseStatus = { 
            message: "Error: No se pudo establecer la conexión con el servidor (Failed to fetch)", 
            statusCode: 0, 
            ok: false 
          };
        } else {
          responseStatus = { 
            message: messages.serviceFail, 
            statusCode: status, 
            ok 
          };
        }
      } else if (status == 401) {
        responseStatus = { message: error.message, statusCode: status, ok };
      } else if (status == 403) {
        responseStatus = { message: messages.serviceFail, statusCode: status, ok };
      } else if (status == 404) {
        responseStatus = { message: messages.serviceNotFound, statusCode: status, ok };
      } else if (status == 500) {
        responseStatus = { message: messages.serviceServerError, statusCode: status, ok };
      }
    }
    return responseStatus;
  }

  succes<T>(result: IResultApi): IResponseStatusViewModel<T> {
    let responseStatus: IResponseStatusViewModel<T> = <IResponseStatusViewModel<T>>{}
    responseStatus = { data: result.data, message: result.message, statusCode: result.statusCode, ok: result.status }
    return responseStatus;
  }

}
