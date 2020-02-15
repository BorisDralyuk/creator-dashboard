import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'moonshot-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpen = false;

  @Input() menu: ElementRef;
  @Output() openMenu = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  openNav() {
    this.openMenu.emit(this.isOpen);
    this.isOpen = !this.isOpen;
  }

}
