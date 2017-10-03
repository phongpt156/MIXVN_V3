import { HttpHeaders, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export function createCommonHeaders(contentType = 'application/json') {
    const headerObj = {};
    headerObj['X-Requested-With'] = 'XMLHttpRequest';

    if (contentType) {
        headerObj['Content-Type'] = contentType;
    }

    const headers = new HttpHeaders(headerObj);
    return { headers: headers };
}

export function handleError(response: HttpResponse<any> | any) {
    let errMsg: string;
    console.log(response);
    if (!response.error) {
        errMsg = `${response.status} - ${response.statusText || ''} ${response.message}`;
    } else {
        errMsg = response.error.message ? response.error.message : response.message.toString();
    }
    return Observable.throw(errMsg);
}

export function handleErrorRes(error: HttpResponse<any> | any) {
    // In a real world app, we might use a remote logging infrastructure
    return Observable.throw(error);
}
