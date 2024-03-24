import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GameOfThronesService } from './services';
import {ListQuotesComponent, MainListComponent, VideoListComponent, MyvideosComponent, SearchNamePipe} from './courses';
import {AllvideosComponent} from "./courses/allvideos/allvideos.component";
import {OnerilenvideosComponent} from "./courses/onerilenvideos/Onerilenvideos.component";
import {YenivideosComponent} from "./courses/yeni/yenivideos.component";
import {BusinessEnglishComponent} from "./courses/businessenglish/business-english.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BarChartComponent} from "./bar-chart/bar-chart.component";
import {SeriousRadioButtonsModule} from "./radio-button/serious-radio-buttons.module";
import { ModalFormModule } from './modal-form/modal-form.module';
import {TimezoneModule} from "./time-zone/timezone.module";
import {MyButtonModule} from "./my-button/my-button.module";



@NgModule({
  declarations: [
    AppComponent,
    ListQuotesComponent,
    MainListComponent,
    VideoListComponent,
    MyvideosComponent,
    SearchNamePipe,
    BusinessEnglishComponent,
      AllvideosComponent,
      OnerilenvideosComponent,
      YenivideosComponent
  ],
  exports:[],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        BarChartComponent,
        SeriousRadioButtonsModule,
        ModalFormModule,
        TimezoneModule,
        MyButtonModule,
        MyButtonModule
    ],
  providers: [GameOfThronesService],
  bootstrap: [AppComponent],
})
export class AppModule { }
