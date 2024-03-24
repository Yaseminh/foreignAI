import { Component } from '@angular/core';
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


  setActivePage(page: string): void {
    this.buttonColor = '#3498db';
    this.buttonColor2 = '';
    this.buttonColor3 = '';
    this.router.navigate(['/myvideos']);
  }
  setActivePage2(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '#3498db';
    this.buttonColor3 = '';
    this.router.navigate(['/allvideos']);
  }

  setActivePage3(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '#3498db';
    this.router.navigate(['/onerilenvideos']);
  }
  setActivePage4(page: string): void {

    this.router.navigate(['/yenivideos']);
  }
  setActivePage5(page: string): void {
    this.buttonColor = '';
    this.buttonColor2 = '';
    this.buttonColor3 = '#3498db';
    this.router.navigate(['/businessenglish']);
  }

  setActivePageLang(): void {
    this.router.navigate(['/languageInfo']);
  }
}
