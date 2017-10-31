import { Directive, 
	ElementRef, 
	Renderer2, 
	HostListener,
	OnInit
 } from '@angular/core';

@Directive({
  selector: '[appContacts]'
})
export class ContactsDirective implements OnInit{
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  @HostListener('mouseover') onMouseChangeColor(event:Event){
  	this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
  	this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black');

  }
  @HostListener('mouseleave') onLeaveChangeColor(event:Event){
  	this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  	this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');

  }

  ngOnInit(){
  	this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  	this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');

  }
}
