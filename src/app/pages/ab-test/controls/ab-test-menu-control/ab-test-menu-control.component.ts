import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'moonshot-ab-test-menu-control',
  templateUrl: './ab-test-menu-control.component.html',
  styleUrls: ['./ab-test-menu-control.component.scss']
})
export class AbTestMenuControlComponent implements OnInit {
  @Output() toogleLeftBlock = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  toogleLeftMenu(){
    this.toogleLeftBlock.emit()
  }

}
