import { Component, OnInit } from '@angular/core';
import { CustomButtonComponent } from "../../shared/custom-button/custom-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css'],
  imports: [CustomButtonComponent, RouterLink]
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
