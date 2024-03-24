import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { GameOfThronesService } from "../../services";
import House from "../../House";
import {Observable} from "rxjs";


@Component({
  selector: "app-main-list",
  templateUrl: "./main-list.component.html",
  styleUrls: ["./main-list.component.css"],
})
export class MainListComponent implements OnInit {
  houses: Observable<House[]>;
  searchString = '';
  houses2 : House[];

  constructor(
    private fb: FormBuilder,
    private service: GameOfThronesService,
  ) {

    this.service.listHouses().subscribe({
      next: (response) => {
        this.houses2 = response;
      },
    })
  }
  selectedTab: string = 'tab1';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  ngOnInit() {

    this.houses= this.service.listHouses()
  }
}
