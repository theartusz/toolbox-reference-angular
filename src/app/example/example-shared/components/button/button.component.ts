import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;

  @Output() click = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit() { }

  onclick(event: MouseEvent): void {
    this.click.emit(event);
  }
}
