import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainListComponent, VideoListComponent, MyvideosComponent, ListQuotesComponent} from './courses';
import {BusinessEnglishComponent} from "./courses/businessenglish/business-english.component";
import {AllvideosComponent} from "./courses/allvideos/allvideos.component";
import {OnerilenvideosComponent} from "./courses/onerilenvideos/Onerilenvideos.component";
import {YenivideosComponent} from "./courses/yeni/yenivideos.component";

const routes: Routes = [

  { path: 'mainlist', component: MainListComponent },
  { path: 'videolist', component: VideoListComponent },
  { path: 'businessenglish', component: BusinessEnglishComponent },
  { path: 'languageInfo', component: ListQuotesComponent },
  { path: '', redirectTo: '/mainlist', pathMatch: 'full' },
  { path: 'hero/:slug', redirectTo: '/house/:slug' },
  { path: 'myvideos', component: MyvideosComponent },
  { path: 'superheroes',  component: MainListComponent },
  { path: 'personheroes',  component: VideoListComponent },
  { path: 'allvideos',  component: AllvideosComponent },
  { path: 'onerilenvideos',  component: OnerilenvideosComponent},
  { path: 'yenivideos',  component: YenivideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
