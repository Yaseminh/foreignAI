import {Component, OnInit} from "@angular/core";
import {GameOfThronesService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import House from "../../House";

@Component({
  selector: 'app-house-detail',
  templateUrl: './myvideos.component.html',
  styleUrls: ['./myvideos.component.css']
})
export class MyvideosComponent implements OnInit {
  hero$!: House;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GameOfThronesService
  ) {}
  ngOnInit(): void {

  }

  activePage: string = 'videolarim'; // Default olarak "home" sayfasını aktif yap
  activePage2: string = 'hepsi'; // Default olarak "home" sayfasını aktif yap
  activePage3: string = 'dilbilgisi'; // Default olarak "home" sayfasını aktif yap
  buttonColor: string = '';
  buttonColor2: string = '';
  buttonColor3: string = '';
  buttonColor4: string = '';
  buttonColor5: string = '';
  buttonColor6: string = '';
  buttonColor7: string = '';
  buttonColor8: string = '';
  buttonColor9: string = '';






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

    this.router.navigate(['/kidsenglish']);
  }


  setActivePage(page: string): void {
    this.activePage = page;
  }
  setActivePage2(page2: string): void {
    this.activePage2 = page2;
  }

  setActivePage20(page2: string): void {
    this.router.navigate(['/allvideos']);
  }

  setActivePageLang(): void {
    this.router.navigate(['/languageInfo']);
  }


}
