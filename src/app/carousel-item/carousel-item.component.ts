import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  template: `
  <div class="item" [class.active]="isActive">
      <h1>{{title}}</h1>
      <div class="carousel-caption">
        {{caption}}
      </div>
    </div>
  `,
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() caption: string;
  @Input() title: string;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:no-console
    console.info(this.isActive);
  }


}
