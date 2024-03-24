import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent {
  public chart: any;
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
        datasets: [
          {
            label: 'İzlenen Videolar',
            data: [5, 3, 2, 7, 8, 4, 6],
            backgroundColor: 'blue'
          },
          {
            label: 'Haftalık Özel Dersler',
            data: [2, 6, 4, 5, 3, 7, 1],
            backgroundColor: 'limegreen'
          },
          {
            label: 'Kelime Öğrenildi',
            data: [10, 8, 12, 6, 9, 5, 7],
            backgroundColor: 'orange'
          },
          {
            label: 'Satır Öğrenildi',
            data: [3, 5, 7, 2, 4, 6, 8],
            backgroundColor: 'purple'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}
