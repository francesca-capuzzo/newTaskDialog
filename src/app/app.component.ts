import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-dialog';

  dialogVisibility = 'visible' //se cambio a invisible non si vedrà nel web

  openDialog(): void {
    if (this.dialogVisibility === 'visible') {
      this.dialogVisibility = 'invisible';
    } else {
      this.dialogVisibility = 'visible';
    }
  }


  displayDialogResult(result: string){
    console.log(result);
    if (this.dialogVisibility === 'visible') {
      this.dialogVisibility = 'invisible';
    } else {
      this.dialogVisibility = 'visible';
    }
  }
}
