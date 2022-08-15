import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CSSClassService {
  private cssClassObservable = new BehaviorSubject({
    flexParent: ""
  });
  currentCSSClass = this.cssClassObservable.asObservable();

  changeCSSClass(cssClasses: any) {
    this.cssClassObservable.next(cssClasses);
  }

}