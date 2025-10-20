import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { BackToTopComponent } from "../shared/back-to-top/back-to-top.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [NavbarComponent, FooterComponent, BackToTopComponent, RouterOutlet]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
