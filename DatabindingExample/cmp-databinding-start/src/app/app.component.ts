import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  serverElements = [ {type: 'server', name: 'testsever', content: 'just a test'} ];

  constructor() {
    console.log('app component constructor() called');
  }


  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    // add to the serverElements array
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    // add to the serverElements array
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  onChangeFirst() {
    console.log(`app component --- onChangeFirst()`);
    this.serverElements[0].name = 'Changed!';
  }

  onDeleteFirst() {
    console.log(`app component --- onDeleteFirst()`);
    this.serverElements.pop();
  }
}
