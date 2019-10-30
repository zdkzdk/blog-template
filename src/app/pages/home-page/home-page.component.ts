import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild('jumpToArListButton', {static: false})
  jumpToArListButton: ElementRef;

  imgUrls: Img[] = [
    {url: '../../../assets/images/home-car/hadoop.jpg', alt: 'hadoop'},
    {url: '../../../assets/images/home-car/java.jpg', alt: 'java'},
    {url: '../../../assets/images/home-car/spark.jpg', alt: 'spark'}
  ];


  @Output() closeSide = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  changeToArtiList() {
    /*this.router.navigateByUrl('/artilist_page');*/
    this.router.navigate(['/artilist_page']);
  }
}

interface Img {
  url: string;
  alt?: string;
}
