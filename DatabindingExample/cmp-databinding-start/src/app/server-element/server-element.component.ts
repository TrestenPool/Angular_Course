import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  // this annotation is to tell angular that this property can be used to property bind as an input
  @Input('element')
  element: {type: string, name: string, content: string};

  @Input('name')
  name: string;

  @ViewChild('heading', {static: true})
  header: ElementRef;

  @ContentChild('contentParagraph', {static: true})
  paragraph: ElementRef
  

  constructor() { 
    console.log('server-element component constructor() called')
  }

  ngOnInit(): void {
    console.log(`server-element --- ngOnInit()`);
    console.log(this.paragraph.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`server-element --- ngOnChanges()`);
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log(`server-element --- ngDoCheck()`);
  }

  ngAfterContentInit(): void {
    console.log(`server-element --- ngAfterContentInit()`);
  }

  ngAfterContentChecked(): void {
    console.log(`server-element --- ngAfterContentInit()`);
  }

  ngAfterViewInit(): void {
    console.log(`server-element --- ngAfterViewInit()`);
  }

  ngAfterViewChecked(): void {
    console.log(`server-element --- ngAfterViewChecked()`);
  }

  ngOnDestroy(): void {
    console.log(`server-element --- ngOnDestroy()`);
  }
}
