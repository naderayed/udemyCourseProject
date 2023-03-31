import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector:'[appBasicHighLight]'
})
export class BasicHighlightDirective implements OnInit{
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor='green'
  }
  constructor(private elementRef:ElementRef) {

  }
}
