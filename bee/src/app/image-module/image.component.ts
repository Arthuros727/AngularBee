import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `
    <div class="image">
      <img id="cash1" src="./assets/cash.jpg">
      <img id="star1" src="./assets/star.jpg">
      <img id="cash2" src="./assets/cash.jpg">
      <img id="star2" src="./assets/star.jpg">
    </div>
  `,
  styles: [`
    .image {
      /* Votre style CSS ici */
    }
  `]
})
export class ImageComponent { }
