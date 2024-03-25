import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainListComponent, VideoListComponent, MyvideosComponent, ListQuotesComponent} from './courses';
import {BusinessEnglishComponent} from "./courses/businessenglish/business-english.component";
import {AllvideosComponent} from "./courses/allvideos/allvideos.component";
import {SuggestedvideosComponent} from "./courses/suggestedvideos/suggestedvideos.component";
import {NewvideosComponent} from "./courses/new/newvideos.component";
import {SocialEnglishComponent} from "./courses/socialenglish/social-english.component";
import {TravelEnglishComponent} from "./courses/travelenglish/travel-english.component";
import {AcademicEnglishComponent} from "./courses/academicenglish/academic-english.component";
import {KidsvideosComponent} from "./courses/kidsvideos/kidsvideos.component";

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
  { path: 'suggestedvideos',  component: SuggestedvideosComponent},
  { path: 'newvideos',  component: NewvideosComponent},
  { path: 'socialenglish', component: SocialEnglishComponent },
  { path: 'travelenglish', component: TravelEnglishComponent },
  { path: 'academicenglish', component: AcademicEnglishComponent },
  { path: 'kidsenglish', component: KidsvideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
