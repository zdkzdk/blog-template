import { Component } from '@angular/core';
import {Article} from './in-memory-data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  articles: Article[];
  constructor(private http: HttpClient) {
    this.http.get<Article[]>('api/articles').toPromise().then((articles) => {
      this.articles = articles;
    });
  }
}
