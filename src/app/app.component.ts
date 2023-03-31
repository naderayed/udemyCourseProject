import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'udemyCourseProject';
  // serverElements = [
  //   {
  //     type: 'server',
  //     name: 'TestServer',
  //     content: 'Just a Test!'
  //   },
  // ];
  //
  //
  // onServerAdded(serverData:{serverName:string,serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name:serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  //
  // onBlueprintAdded(blueprintData:{serverName:string,serverContent:string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }
  numbers = [1, 2, 3, 4, 5];
  oddNumber = [1, 3, 5]
  evenNumber = [2,5]
  onlyOdd = false;
}
