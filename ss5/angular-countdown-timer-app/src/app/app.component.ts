import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-countdown-timer-app';
  seconds = 0;
  countdown = 0;

  start() {
    if(this.seconds > 0) {
      this.countdown = window.setInterval(
        ()=> {
          this.seconds--;
          console.log(this.seconds);
          if(this.seconds === 0) {
            clearInterval(this.countdown);
            console.log("clear: "+this.seconds)
          }
        }
        ,1000);
    }
  }

  stop() {
    clearInterval(this.countdown);
  }


  reset() {
    clearInterval(this.countdown);
    this.seconds = 0;
    console.log("stop countDown");
  }
}
