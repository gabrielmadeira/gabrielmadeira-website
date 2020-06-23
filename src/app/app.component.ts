import { Component, OnInit, HostListener } from '@angular/core';
import { jarallax } from 'jarallax';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'gabrielmadeira';
  ngOnInit() {

    jarallax(document.querySelectorAll('.jarallax'));
    jarallax(document.querySelectorAll('.jarallax-keep-img'), {
        keepImg: true,
    });

  }
}
