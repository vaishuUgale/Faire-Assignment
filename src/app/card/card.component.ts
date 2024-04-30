import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() cardTitle: string = '';
  @Input() images: string[] = [];
  @Input() ratings: number = 0;

  currentIndex: number = 0;

  getImageUrl() {
    return this.images[this.currentIndex];
  }

  prevSlide() {
    const isFirstSlide = this.currentIndex === 0;
    this.currentIndex = isFirstSlide ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    const isLastSlide = this.currentIndex === this.images.length - 1;
    this.currentIndex = isLastSlide ? 0 : this.currentIndex + 1;
  }

  goToSlide(slideIndex: number) {
    this.currentIndex = slideIndex;
  }

}
