import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

import { Observable } from 'rxjs';

@Component({
  selector: 'moonshot-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title;

  constructor() {

  }

  ngOnInit() {
  }

}
