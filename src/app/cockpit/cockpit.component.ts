import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';



@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() onServerAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() onBlueprintAdded = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = '';
  // newServerContent = '';

 @ViewChild('serverContentInput',{static:true}) serverContentInput:ElementRef;


  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement) {

    this.onServerAdded.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.onBlueprintAdded.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    })

  }

}
