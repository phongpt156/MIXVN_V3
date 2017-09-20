import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  private isBlur: boolean = false;

  constructor() { }

  getBlur(): boolean {
    return this.isBlur;
  }

  setBlur(status: boolean) {
    this.isBlur = status;
  }
}
