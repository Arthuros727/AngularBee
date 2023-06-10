// import { Component } from '@angular/core';
import {Component, Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {YourDialogComponent } from '../your-dialog/your-dialog.component';





@Component({
  selector: 'app-image',
  template: `
    <div class="image">
      <img (click)="openModal('cash')" id="cash1" src="./assets/cash.jpg"> 
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

export class ImageComponent {
  constructor(private dialog: MatDialog) { }
  openModal(imageId: string) {

      const dialogRef = this.dialog.open(YourDialogComponent, {
        width: '400px',
        data: { imageId },
        position: {
          
          top: '-20vw',
          left: '50px'
        }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log('Résultat du dialogue :', result);
      });
    }
    
  }
 
