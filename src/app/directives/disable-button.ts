import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appDisableButton]',
  standalone: true,
})
export class DisableButtonDirective implements OnInit{

  @Input() appDisableButton!: AbstractControl;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.updateButtonState();
    this.appDisableButton.valueChanges.subscribe(() => {
      this.updateButtonState();
    });
  }
  private updateButtonState(): void {
      const nameControl = this.appDisableButton.get('Name');
      const isDisabled = !nameControl?.value;
      this.el.nativeElement.disabled = isDisabled;
  }
}
