import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  // selector:'.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styles:[
    `h1{
      color:red;
    }`
  ]
})
export class ServersComponent implements OnInit {
  allowNewServer :boolean = false;

  constructor() {

    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

}
