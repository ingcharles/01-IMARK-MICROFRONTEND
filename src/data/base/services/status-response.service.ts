import { Injectable } from '@angular/core';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { messages } from '../constants/messages';

@Injectable({ providedIn: 'root' })
export class StatusResponseService {
  constructor() { }

  error(httpErrorResponse: any): IResponseStatusViewModel {
    let { error, ok, status, StatusCode } = httpErrorResponse;
    let responseStatus: IResponseStatusViewModel = <IResponseStatusViewModel>{}

    if (StatusCode) {
      if (StatusCode == 404 || StatusCode == 500) {
        responseStatus = { message: error.Message, statusCode: StatusCode, ok }
      }

    } else {

      if (status == 401) {

        responseStatus = { message: error.message, statusCode: status, ok }

      } else if (status == 0 || status == 403) {

        responseStatus = { message: messages.serviceFail, statusCode: status, ok }

      }
    }
    console.log("responseStatus", responseStatus)
    return responseStatus;
  }

}
