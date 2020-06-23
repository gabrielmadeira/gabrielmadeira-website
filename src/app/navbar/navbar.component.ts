import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll', ['$event']) onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset*0.5 > element.clientHeight) {
      element.classList.remove('navbar-inverse');
    } else {
      element.classList.add('navbar-inverse');
    }
  }

  ngOnInit() {
    
  }
    
}
