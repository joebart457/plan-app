import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  private terminalString: string = '';
  private blinkOn: boolean = false;
  private lastResetBlink: any;
  private blinkLocked: boolean = false;
  constructor() { }

  ngOnInit(): void {
    window.onkeydown = function(e) { 
      if  (e.keyCode == 32 && e.target.className !== 'terminal-wrapper'){
        console.log(e.target);
        e.preventDefault();
      }
    };
    window.onkeyup = function(e) { 
      if  (e.keyCode == 8 && e.target.className !== 'terminal-wrapper'){
        e.preventDefault();
      }
    };
    this.toggleBlink();
  }

  toggleBlink(){
    setTimeout(()=>{
      if (!this.blinkLocked) {
        this.blinkOn = this.blinkOn ? false : true;
      }
      this.toggleBlink();
    }, 1000);
  }

  onUserInput(event: any){
    if (event){
      console.log(event);
      if (event.keyCode === 32){
        event.preventDefault();
      }
      if (event.keyCode === 13){
        this.terminalString += '\n';
      } else if (event.keyCode === 8) {
        if (this.terminalString.length > 0){
          this.terminalString = this.terminalString.substr(0, this.terminalString.length - 1);
        }
      } else if (event.keyCode === 16){

      } else {
        this.terminalString += event.key;
      }
      this.blinkOn = true;
      this.blinkLocked = true;
      if (this.lastResetBlink){
        clearTimeout(this.lastResetBlink);
      }
      this.lastResetBlink = setTimeout(this.resetBlinkLock, 500, this);
    }
  }
  
  resetBlinkLock(comp: TerminalComponent): void {
    comp.blinkLocked = false;
  }

  getTerminalString(): string {
    // console.log(this.blinkOn);
    return this.terminalString + (this.blinkOn? '\u2588' : '');
  }

}
