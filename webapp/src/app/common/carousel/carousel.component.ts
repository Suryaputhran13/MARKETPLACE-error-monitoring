import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut,
  AnimationType
} from "./carousel.animation";
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slideAnimation', [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() slides: any;

  currentSlide = 0;
  animationType = AnimationType.Fade;
  interval: any;
  currentClickTime: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startAutoSlide()
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      let timeDiff = (new Date().getTime()) - this.currentClickTime
      if (timeDiff > 3000) {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
      }
    }, 3000);
  }

  stopAutoSlide() {
    clearInterval(this.interval)
  }

  onPreviousClick() {
    this.currentClickTime = Date.now();
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    this.currentClickTime = Date.now();
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnDestroy() {
    this.stopAutoSlide()
  }
}
