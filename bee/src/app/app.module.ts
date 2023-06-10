import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageModule } from './image-module/image-module.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YourDialogComponent } from './your-dialog/your-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    YourDialogComponent
  ],
  imports: [
    BrowserModule,
    ImageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

