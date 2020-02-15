import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'moonshot-ab-test-menu',
  templateUrl: './ab-test-menu.component.html',
  styleUrls: ['./ab-test-menu.component.scss']
})
export class AbTestMenuComponent implements OnInit {

  @Input() title;
  @Output() toogleLeftMenu = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  clickToogleLeftMenu(){
    this.toogleLeftMenu.emit();
  }
}
