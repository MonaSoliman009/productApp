import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {

  // @Input('defualtColor') defColor:string='green'
  // @Input('highlightColor') hColor:string='yellow'
  @Input() defualtColor: string = 'green'
  @Input() highlightColor: string = 'yellow'
  constructor(private el: ElementRef, private render2: Renderer2) {
    // el.nativeElement.style.backgroundColor='green'
    render2.setStyle(el.nativeElement, 'backgroundColor', this.defualtColor)
  }

  @HostListener('mouseover')
  mouseOver() {
    // this.el.nativeElement.style.backgroundColor='yellow'
    this.render2.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor)

  }

  @HostListener('mouseout')
  mouseOut() {
    // this.el.nativeElement.style.backgroundColor = 'green'
    this.render2.setStyle(this.el.nativeElement, 'backgroundColor', this.defualtColor)

  }
}
