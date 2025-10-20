import { Component, OnInit } from '@angular/core';
import { CustomButtonComponent } from "../../shared/custom-button/custom-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
  imports: [CustomButtonComponent, RouterLink]
})
export class PaymentSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
