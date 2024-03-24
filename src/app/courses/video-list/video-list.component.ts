import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GameOfThronesService } from "../../services";
import { first } from "rxjs/operators";
import House from "../../House";
import Person from "../../Person";

@Component({
  selector: "app-person-list",
  templateUrl: "./video-list.component.html",
  styleUrls: ["./video-list.component.css"],
})
export class VideoListComponent implements OnInit {

  persons : Person[];
  searchString = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {

  }
  activePage: string = 'videolar'; // Default olarak "home" sayfasını aktif yap
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
