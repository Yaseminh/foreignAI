import {Component, OnInit} from "@angular/core";
import {GameOfThronesService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import House from "../../House";

@Component({
  selector: 'app-house-detail',
  templateUrl: './onerilenvideos.component.html',
  styleUrls: ['./onerilenvideos.component.css']
})
export class OnerilenvideosComponent implements OnInit {
  hero$!: House;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GameOfThronesService
  ) {}
  ngOnInit(): void {

  }

  setActivePageLang(): void {
    this.router.navigate(['/languageInfo']);
  }


}
