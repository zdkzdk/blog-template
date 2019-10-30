import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Article} from '../../in-memory-data.service';


@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  article: Article;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const artiId = +this.route.snapshot.params.id;
    this.http.get<Article[]>('api/articles').toPromise().then((articles) => {
      articles.forEach((article) => {
        if (artiId === article.id) {
          this.article = article;
        }
      });
    });
  }

  ngOnInit() {
  }

}
