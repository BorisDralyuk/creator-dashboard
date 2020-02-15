import { Component, ChangeDetectorRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'moonshot-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit   {

  @ViewChild('sidebar', { static: true }) sidebar;
  @ViewChild('main', { static: true }) main;

  menu = [
    {
      title_section: 'Website',
      icon: 'add',
      items: [
        {
          title: 'Pages',
          icon: 'line_weight',
          link: '/auth/login'
        },
        {
          title: 'Sitemap',
          icon: 'subdirectory_arrow_right',
          link: ''
        },
        {
          title: 'Editor',
          icon: 'format_color_fill',
          link: ''
        }
      ]
    },
    {
      title_section: 'Website',
      icon: 'add',
      items: [
        {
          title: 'Pages',
          icon: 'line_weight',
          link: ''
        },
        {
          title: 'Sitemap',
          icon: 'subdirectory_arrow_right',
          link: ''
        },
        {
          title: 'Editor',
          icon: 'format_color_fill',
          link: ''
        }
      ]
    }
  ]

  ngOnInit(){ }

  constructor(private route: ActivatedRoute) { }

  openMenu(value){
    if (value) {
      this.sidebar.nativeElement.style.width = "230px";
      this.main.nativeElement.style.marginLeft = "230px";
    } else {
      this.sidebar.nativeElement.style.width = "60px";
      this.main.nativeElement.style.marginLeft = "60px";
    }
  }
}
