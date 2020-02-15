import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'moonshot-ab-test-editor',
  templateUrl: './ab-test-editor.component.html',
  styleUrls: ['./ab-test-editor.component.scss']
})
export class AbTestEditorComponent implements OnInit {

  toogleLeft = true;

  constructor() { }

  ngOnInit() {
  }

  toogleLeftBlock() {
    this.toogleLeft = !this.toogleLeft;
  }

}
