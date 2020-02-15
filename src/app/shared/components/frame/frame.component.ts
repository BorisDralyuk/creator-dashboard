import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'moonshot-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {

  @ViewChild('frame', { static: true }) frame;
  constructor() { }

  ngOnInit() {
    const a = this.frame.nativeElement.contentWindow.document;
    a.body.style = 'overflow: hidden'


  }

}
