import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('visibleInvisible', [
      state('visible', style({
        // opacity: 1,
        // top: '100px',
        // color: 'red',

        left: '0px', //appare dal lato 
        top: '0px', //appare dall'alto


  

      })),
      state('invisible', style({
        // opacity: 0,
        // top: '30px',
        // color: 'black',

        left: '-100vw', //completamente fuori dallo schermo
        top: '100vh',


      })),
      transition('visible => invisible', [
        animate('1s'),
        // style({                  //NON FUNZIONA PER QUESTO ABBIAMO AGGIUNTO (@visibleInvisible.start)="$event.element.style.display = 'flex'" + (@visibleInvisible.done)='$event.element.style.display = ($event.toState === "visible" ? "flex" : "none")' nell'HTML
        //   display: 'none'
        // })
      ]),
      transition('invisible => visible', [
        // style({
        //   display: 'flex'
        // }),
        animate('1s')
      ]),
    ]),
  ]
})
export class DialogComponent implements OnInit {

  @Output() closedWithResult = new EventEmitter<string>();
  @Input() visibilityState = 'invisible';

  constructor() { }

  ngOnInit(): void {
  }


  closeDialog(result?: string){
    if (result) {
      this.closedWithResult.emit(result);
    }
    this.visibilityState = 'invisible';
  }



  logEvent(event: any){
    console.log(event);
    
  }


}

/*
AMINATIONS:
1- aggiungo nel @component la dichiarazione animations: [] 
2- 
*/