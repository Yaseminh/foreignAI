import { Component } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})


export class MyButtonComponent {
  showContent = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }

}
