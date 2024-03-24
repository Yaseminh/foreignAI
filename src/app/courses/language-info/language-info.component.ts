import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GameOfThronesService } from "../../services";
import RandomQuote from "../../RandomQuote";

@Component({
  selector: "app-list-quotes",
  templateUrl: "./language-info.component.html",
  styleUrls: ["./language-info.component.css"],
})
export class ListQuotesComponent implements OnInit {
  randomQuotes :RandomQuote[];
  constructor(private service: GameOfThronesService, private router: Router) {}

  ngOnInit() {

  }

  activePage: string = ''; // Default olarak "home" sayfasını aktif yap

  setActivePage(page: string): void {

    this.router.navigate(['/myvideos']);
  }
  setActivePage2(page: string): void {

    this.router.navigate(['/allvideos']);
  }
  setActivePage3(page: string): void {

    this.router.navigate(['/onerilenvideos']);
  }
  setActivePage4(page: string): void {

    this.router.navigate(['/yenivideos']);
  }

  setActivePageLang(): void {
    this.router.navigate(['/languageInfo']);
  }


}
