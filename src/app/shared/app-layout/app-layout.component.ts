import { Component, ChangeDetectorRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'moonshot-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})

// export class AppLayoutComponent implements OnInit {

//   constructor() {
//   }

//   @ViewChild('drawer', { static: false })
//   drawer: MatSidenav;

//   ngOnInit(): void {
//   }
// }
export class AppLayoutComponent   {
  mobileQuery: MediaQueryList;
  @ViewChild('sidebar', { static: false })
  sidebar;
  @ViewChild('main', { static: false })
  main;


  isOpen = true;
 

  menuItems = [
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

 

  constructor() {
  }


  openNav() {
    if (this.isOpen){
      this.sidebar.nativeElement.style.width = "250px";
      this.main.nativeElement.style.marginLeft = "250px";
      this.isOpen = false;
    } else{
      this.sidebar.nativeElement.style.width = "60px";
      this.main.nativeElement.style.marginLeft = "60px";
      this.isOpen = true;
    }
  }

}
