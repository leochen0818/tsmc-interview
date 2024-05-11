import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, skip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private _filterByName$ = new BehaviorSubject('');

  constructor() {
  }

  set filterByName(value: string) {
    this._filterByName$.next(value);
  }

  get filterByName(): string {
    return this._filterByName$.value;
  }

  get filterByNameChanged(): Observable<string> {
    return this._filterByName$.asObservable().pipe(skip(1));
  }
}
