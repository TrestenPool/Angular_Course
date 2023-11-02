import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent implements OnInit, OnChanges {
  @Output()
  serverCreated     = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output()
  blueprintCreated  = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('contentInput', {static: false})
  serverContentInput: ElementRef;

  constructor() { 
    console.log('cockpit component constructor() called');
  }


  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }

}
