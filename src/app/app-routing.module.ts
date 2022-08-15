import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LanguageComponent } from './components/language/language.component';

const routes: Routes = [
  {
    path: ":lang", component: LanguageComponent, children: [
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
    ],
  },
  { path: "", pathMatch: "full", redirectTo: "en" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
