import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { TaskDialogModule } from './components/task-dialog/module/task-dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TaskDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
