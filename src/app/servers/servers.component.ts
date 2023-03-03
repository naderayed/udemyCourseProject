import {Component, OnInit} from '@angular/core';

@Component({
  //selector: '[app-servers]',
  // selector:'.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `h1 {
      color: red;
    }`
  ]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server created!";
  serverName:string="";
  serverCreated : boolean= false;

  constructor() {

    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreationServer() {
    this.serverCreated=true;
    this.serverCreationStatus = "Server Was created, Name is "+this.serverName  }

  onUpdateServerName(event: Event) {
    this.serverName=(<HTMLInputElement>event.target).value
  }
}
