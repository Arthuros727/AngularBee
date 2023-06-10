import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { ImageComponent } from './image.component';

@NgModule({
  declarations: [ImageComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [ImageComponent]
})
export class ImageModule { }





