import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CSSClassService } from 'src/app/services/css-class.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  currentLang: string = "";
  cssClasses: any = {};
  cssClassServiceSubscription: Subscription = new Subscription();

  constructor(private _cssClassService: CSSClassService) { }
  

  ngOnInit(): void {
    this.cssClassServiceSubscription = this._cssClassService.currentCSSClass.subscribe(cssClasses => {
      this.cssClasses = cssClasses;
    })
  }

  ngOnDestroy(): void {
    if(this.cssClassServiceSubscription) this.cssClassServiceSubscription.unsubscribe();
  }

}
