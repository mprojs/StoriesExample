import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.scss' ]
})
export class NavComponent implements OnInit {

  isOpen: boolean;
  links = [
    {
      name: 'Stories',
      image: '/assets/images/sidebar/stories.svg',
      link: '/cp/stories'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  leave() {
    this.isOpen = false;
  }
}
