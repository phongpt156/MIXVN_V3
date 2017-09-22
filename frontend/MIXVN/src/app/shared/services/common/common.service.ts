import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {
  protected isBlur = false;

  blurChange: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  getBlur(): boolean {
    return this.isBlur;
  }

  setBlur(status: boolean) {
    this.blurChange.next(status);
  }
}
