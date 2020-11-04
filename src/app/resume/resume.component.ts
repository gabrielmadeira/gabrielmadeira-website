import { Component, OnInit } from '@angular/core';
import { jarallax } from 'jarallax';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jarallax(document.querySelectorAll('.jarallax'));
      jarallax(document.querySelectorAll('.jarallax-keep-img'), {
          keepImg: true,
      });
  }

}
