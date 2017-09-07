import { Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export function createCommonHeaders(authService, contentType = 'application/json') {
    let headerObj = {};
    headerObj['X-Requested-With'] = 'XMLHttpRequest';

    if (contentType) {
        headerObj['Content-Type'] = contentType;
    }

    let token = authService.getToken();
    if (token) {
        headerObj['Authorization'] = `Bearer ${token}`;
    }

    let headers = new Headers( headerObj );
    return new RequestOptions({ headers });
}

export function extractData(res: Response) {
    let body: any = {};
    try {
        body = res.json();
    } catch (e) {
        console.log(e);
    }
    return body || {};
}

export function extractDataArray(res: Response) {
    let body: any[] = [];
    try {
        body = res.json();
    } catch (e) {
        console.log(e);
    }
    return body || [];
}

export function handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json();
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
}

export function handleErrorRes(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    return Observable.throw(error);
}
