import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() institution: string;
  @Input() description: string;
  @Input() imgUrl: string;
  @Input() imgLink: string;
  @Input() period: string;
  @Input() location: string;

  constructor() { }

  ngOnInit(): void {
  }

}
