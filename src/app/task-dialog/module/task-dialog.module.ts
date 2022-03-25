import { NgModule } from '@angular/core';
import { TaskDialogComponent } from '../task-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    TaskDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    TaskDialogComponent
  ]
})
export class TaskDialogModule { }
