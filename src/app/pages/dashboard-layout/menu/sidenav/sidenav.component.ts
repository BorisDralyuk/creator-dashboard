import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'moonshot-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() menu;

  constructor() { }

  ngOnInit() { }

}
