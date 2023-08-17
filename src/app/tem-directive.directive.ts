import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appTemDirective]'
})
export class TemDirectiveDirective {
 @HostListener('click') onClick(){
  const currentText = this.el.nativeElement.textContent;
    const newText = currentText === 'Original Text' ? 'New Text' : 'Original Text';
    this.el.nativeElement.textContent = newText;
 }
  constructor(private el:ElementRef) { }

}
