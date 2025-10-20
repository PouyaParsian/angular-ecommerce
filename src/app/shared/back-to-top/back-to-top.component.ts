import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css'],
  imports: [NgClass]
})
export class BackToTopComponent {

  buttonVisibility!: boolean;
  
  constructor() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        this.buttonVisibility = true;
      }
      else {
        this.buttonVisibility = false;
      }
    });
  }

  goUp() {
    window.scrollTo(
      {
        top: 0
      }
    );
  }
}
