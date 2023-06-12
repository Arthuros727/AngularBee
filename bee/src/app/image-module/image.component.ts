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
  `
})

export class ImageComponent {
  constructor(private dialog: MatDialog) { }
  openModal(imageId: string) {

      const dialogRef = this.dialog.open(YourDialogComponent, {
        width: '30%',
        height: '30%',
        

        data: { imageId },
        position: {
          
          top: '100px',
          left: '35%'
        },
        panelClass: 'modal'
        
        
      });
      window.addEventListener('resize', () => {
        if (window.innerWidth <= 810) {
          dialogRef.updateSize('50%');
          dialogRef.updatePosition({
            top: '100px',
            left: '25%'
          })
        } else {
          dialogRef.updateSize('30%', "30%");
          dialogRef.updatePosition({
            top: '100px',
            left: '35%'
          })
        }
      });
      if (window.innerWidth < 810) {
        dialogRef.updateSize('50%');
        dialogRef.updatePosition({
          top: '100px',
          left: '25%'
        })
      }
    
     
    }
    
  }
 
