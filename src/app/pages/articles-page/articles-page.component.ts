import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../../in-memory-data.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.css']
})
export class ArticlesPageComponent implements OnInit {
  likes = 0;
  dislikes = 0;
  articles: Article[];

  // time = distanceInWords(new Date(), new Date());

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
  }

  ngOnInit() {
    /*页面刚加载就请求*/
    this.http.get<Article[]>('api/articles').toPromise().then((articles) => {
      this.articles = articles;
    });
  }


  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }

  viewDetail(id: number): void {
    this.router.navigate(['/article_page', id]);
  }
}
