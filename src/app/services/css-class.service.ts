import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CSSClassService {
  defaultClasses = {
    flexParent: ""
  }
  private cssClassObservable = new BehaviorSubject({...this.defaultClasses});
  currentCSSClass = this.cssClassObservable.asObservable();

  changeCSSClass(cssClasses: any) {
    this.cssClassObservable.next(cssClasses);
  }

}