import { Component} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import {GameOfThronesService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modalService: NgbModal,private service: GameOfThronesService, private router: Router) {}

  title = 'Simple Example app with Angular';

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  activePage: string = 'videolarim'; // Default olarak "home" sayfasını aktif yap

  buttonColor: string = '';
  buttonColor2: string = '';
  buttonColor3: string = '';
  buttonColor4: string = '';
  buttonColor5: string = '';
  buttonColor6: string = '';
  buttonColor7: string = '';
  buttonColor8: string = '';
  buttonColor9: string = '';




  setActivePage(page: string): void {
    this.buttonColor = '#3498db';
    this.buttonColor2 = '';
    this.buttonColor3 = '';
    this.buttonColor4 = '';
    this.buttonColor5 = '';
    this.buttonColor6 = '';
    this.buttonColor7 = '';
    this.buttonColor8 = '';
    this.buttonColor9 = '';
    this.router.navigate(['/myvideos']);
  }
  setActivePage2(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '#3498db';
    this.buttonColor3 = '';
    this.buttonColor4 = '';
    this.buttonColor5 = '';
    this.buttonColor6 = '';
    this.buttonColor7 = '';
    this.buttonColor8 = '';
    this.router.navigate(['/allvideos']);
  }

  setActivePage3(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '#3498db';
    this.buttonColor4 = '';
    this.buttonColor5 = '';
    this.buttonColor6 = '';
    this.buttonColor7 = '';
    this.buttonColor8 = '';
    this.router.navigate(['/suggestedvideos']);
  }

  setActivePage4(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '';
    this.buttonColor4 = '#3498db';
    this.buttonColor5 = '';
    this.buttonColor6 = '';
    this.buttonColor7 = '';
    this.buttonColor8 = '';
    this.router.navigate(['/newvideos']);
  }
  setActivePage5(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '';
    this.buttonColor4 = '';
    this.buttonColor5 = '#3498db';
    this.buttonColor6 = '';
    this.buttonColor7 = '';
    this.buttonColor8 = '';
    this.router.navigate(['/businessenglish']);
  }
  setActivePage6(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '';
    this.buttonColor4 = '';
    this.buttonColor5 = '';
    this.buttonColor6 = '#3498db';
    this.buttonColor7 = '';
    this.buttonColor8 = '';
    this.router.navigate(['/socialenglish']);
  }
  setActivePage7(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '';
    this.buttonColor4 = '';
    this.buttonColor5 = '';
    this.buttonColor6 = '';
    this.buttonColor7 = '#3498db';
    this.buttonColor8 = '';
    this.router.navigate(['/travelenglish']);
  }
  setActivePage8(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '';
    this.buttonColor4 = '';
    this.buttonColor5 = '';
    this.buttonColor6 = '';
    this.buttonColor7 = '';
    this.buttonColor8 = '#3498db';
    this.router.navigate(['/academicenglish']);
  }
  setActivePage9(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '';
    this.buttonColor4 = '';
    this.buttonColor5 = '';
    this.buttonColor6 = '';
    this.buttonColor7 = '';
    this.buttonColor8 = '';
    this.router.navigate(['/kidsenglish']);
  }
  setActivePageLang(): void {
    this.router.navigate(['/languageInfo']);
  }
}
