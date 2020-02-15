import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'moonshot-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

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
