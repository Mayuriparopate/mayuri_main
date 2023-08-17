import { Directive,ElementRef,HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[colorChange]'
})
export class LoginDirective {

@HostListener('click') onClick(){
  this.el.nativeElement.style.color = 'Red';
}
 
  constructor(private el:ElementRef,private renderer:Renderer2) { 
    
  }

  hightLight(color){
    this.el.nativeElement.style.color = color;
  }

}
