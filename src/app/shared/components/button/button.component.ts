import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   

@Component({
  selector: 'app-button',
  template: `<button [ngClass]="type">{{ label }}</button>`,   // css class is dynamic
  styleUrls: ['./button.component.scss']
})

// label and type can be passed down via Inputs but are assigned default values
export class ButtonComponent {
  @Input() label: string = 'Click';
  @Input() type: string = 'primary';
  @Input() enabled: boolean = true;
}
