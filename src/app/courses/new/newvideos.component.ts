import {Component, OnInit} from "@angular/core";
import {GameOfThronesService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import House from "../../House";

@Component({
  selector: 'app-house-detail',
  templateUrl: './newvideos.component.html',
  styleUrls: ['./newvideos.component.css']
})
export class NewvideosComponent implements OnInit {
  hero$!: House;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GameOfThronesService
  ) {}
  ngOnInit(): void {

  }

  activePage: string = 'yeni'; // Default olarak "home" sayfasını aktif yap


  setActivePage(page: string): void {
    this.activePage = page;
  }


  setActivePageLang(): void {
    this.router.navigate(['/yenivideos']);
  }


}
