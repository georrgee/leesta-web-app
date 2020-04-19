import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    @HostBinding('class.open') isOpen = false; // css built in code; class.open
    
    // helps with clicking outside the drop down where it puts the drop down away
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elRef: ElementRef) {}

}