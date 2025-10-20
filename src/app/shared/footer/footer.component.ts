import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from "../custom-button/custom-button.component";
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [RouterLink, CustomButtonComponent, FormsModule]
})
export class FooterComponent implements OnInit {

  snackBar = inject(MatSnackBar);
  emailInput: string = "";

  constructor() { }

  ngOnInit() {
  }

  handleSubmitButton() {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    if (this.emailInput === "") return;

    if (regex.test(this.emailInput)) {
      this.snackBar.open("Thanks for subscribing! 🎉", "", {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    }
    else {
      this.snackBar.open("Please enter a valid email", "", {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    }
    
    this.emailInput = "";
  }
}
