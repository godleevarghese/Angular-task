import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private _formData = new Subject<any>();

  dataAsObservable$ = this._formData.asObservable();

  constructor() {}

  sentData(data: any) {
    this._formData.next(data);
  }
}
