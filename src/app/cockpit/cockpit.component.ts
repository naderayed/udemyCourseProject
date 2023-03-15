import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 @Output() onServerAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() onBlueprintAdded = new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';



  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
   this.onServerAdded.emit({serverName:this.newServerName,serverContent:this.newServerContent})
  }

  onAddBlueprint() {
    this.onBlueprintAdded.emit({serverName:this.newServerName,serverContent:this.newServerContent})

  }

}
