import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CSSClassService } from 'src/app/services/css-class.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _cssClassService: CSSClassService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      const lang = params.lang;
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
      const cssClasses = { ...this._cssClassService.defaultClasses };
      if(lang === "ar") {
        cssClasses.flexParent = "flex-row-reverse text-right"
      }
      this._cssClassService.changeCSSClass(cssClasses);
    });

    if(this._router.url.split("/").length === 2) {
      this._router.navigate(['./home'], { relativeTo: this._route });
    }
  }

}
