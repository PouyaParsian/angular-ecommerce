import { Component, OnInit } from '@angular/core';
import { ImageSliderComponent } from "./image-slider/image-slider.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  imports: [ImageSliderComponent, RouterLink]
})
export class HeroComponent {
  
  firstImageSlider: any[] = [
    {
      url: "images/header/image-slider-1/1.jpg"
    },
    {
      url: "images/header/image-slider-1/3.jpg"
    },
  ];
}