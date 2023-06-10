import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-your-dialog',
  templateUrl: './your-dialog.component.html',
  styleUrls: ['./your-dialog.component.css']
})
export class YourDialogComponent {
  constructor(private dialog: MatDialog) { }
  sub() {
    let name = <HTMLInputElement>document.getElementById("name");
    let email = <HTMLInputElement>document.getElementById("email");



    console.log("name : ", name.value, "\n email : ", email.value)

  }

  closeX() {

    const dialogRef = this.dialog.closeAll();
  }
  
}
