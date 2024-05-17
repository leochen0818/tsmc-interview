import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, Observable, skip } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private _scriptSet = new Set<string>();
  private _filterByName$ = new BehaviorSubject('');

  constructor(@Inject(DOCUMENT) private document: Document) {
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

  loadCustomWidgetScript(type: string): Observable<void> {
    return new Observable<void>(observer => {
      if ( this._scriptSet.has(type) ) {
        observer.next();
        observer.complete();
        return;
      }

      const script = this.document.createElement('script');
      script.src = `assets/custom-widgets/${ type }.js`;
      script.onload = () => {
        observer.next();
        observer.complete();
      };
      this._scriptSet.add(type);
      this.document.head.appendChild(script);
    });
  }
}
