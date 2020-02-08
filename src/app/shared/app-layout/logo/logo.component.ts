import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'moonshot-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input() isOpen: boolean;
  constructor() { }

  ngOnInit() {
  }

}
