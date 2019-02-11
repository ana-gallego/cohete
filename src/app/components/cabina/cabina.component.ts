import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})
export class CabinaComponent implements OnInit, OnDestroy {

  intervalId = 0;
  message = '10';
  seconds = 11;

  clearTimer() { 
    clearInterval(this.intervalId);
   }

  ngOnInit() { }
  ngOnDestroy() { this.clearTimer(); }

  //esta funcion se llama desde control
  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer();
    this.message = `${this.seconds}`;
  }
  countDown() {
    //cuenta atras
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'DESPEGUE!';
        this.clearTimer();
      } else {
        this.message = `${this.seconds} `;
        console.log(`${this.seconds}`);
      }
    }, 1000);
  }
}
