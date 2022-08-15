import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      const lang = params.lang;
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
    });

    if(this._router.url.split("/").length === 2) {
      this._router.navigate(['./home'], { relativeTo: this._route });
    }
  }

}
