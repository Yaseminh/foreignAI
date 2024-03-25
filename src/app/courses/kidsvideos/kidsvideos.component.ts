import {Component, OnInit} from "@angular/core";
import {GameOfThronesService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import House from "../../House";

@Component({
  selector: 'app-house-detail',
  templateUrl: './kidsvideos.component.html',
  styleUrls: ['./kidsvideos.component.css']
})
export class KidsvideosComponent implements OnInit {
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
