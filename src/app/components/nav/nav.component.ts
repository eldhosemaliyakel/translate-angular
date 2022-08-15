import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { CSSClassService } from 'src/app/services/css-class.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  constructor(
    private _translation: TranslateService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cssClassService: CSSClassService
  ) { }

  currentLang: string = "";
  cssClasses: any = {};
  cssClassServiceSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this._translation.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLang = event.lang;
    });

    this.cssClassServiceSubscription = this._cssClassService.currentCSSClass.subscribe(cssClasses => {
      this.cssClasses = cssClasses;
    })
  }

  changeLang() {
    const changedLang = this.currentLang === "en" ? "ar" : "en";
    this._router.navigateByUrl(this._router.url.replace(this.currentLang, changedLang))
  }

  ngOnDestroy(): void {
    if(this.cssClassServiceSubscription) this.cssClassServiceSubscription.unsubscribe();
  }

}
