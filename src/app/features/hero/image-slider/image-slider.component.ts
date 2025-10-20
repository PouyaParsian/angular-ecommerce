import { NgStyle } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  imports: [NgStyle]
})
export class ImageSliderComponent implements OnInit {
  @Input() slides: any[] = [];
  slideInterval!: number;
  index = 0;
  hidden = false;
  next() {
    this.hidden = true;
    setTimeout(() => {
      this.index = (this.index + 1) % this.slides.length;
      this.hidden = false;
    }, 200)
  }
  prev() {
    this.hidden = true;
    setTimeout(() => {
      this.index = (this.index - 1 + this.slides.length) % this.slides.length;
      this.hidden = false;
    }, 200)
  }
  ngOnInit(): void {
    this.slideInterval = Math.floor(Math.random() * (12000 - 7000 + 1)) + 7000;
    setInterval(() => {
      this.next();
    }, this.slideInterval)
  }
}
