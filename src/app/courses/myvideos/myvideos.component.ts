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

  setActivePage(page: string): void {
    this.activePage = page;
  }
  setActivePage2(page2: string): void {
    this.activePage2 = page2;
  }

  setActivePageLang(): void {
    this.router.navigate(['/languageInfo']);
  }


}
