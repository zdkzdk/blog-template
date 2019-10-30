import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';
import {ArticleWord} from './constant/article-word';


export interface Article {
  id: number;
  title: string;
  author?: string;
  overview?: string;
  content: string;
  createTime: string;
  updateTime: string;
}

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  article: Article;

  createDb() {
    const articles: Article[] = [
      {
        id: 123,
        title: 'Rest&Restful',
        author: 'dc',
        overview: 'rest、restful我刚开始学web开发的时候就听说过，记得那时候就搞不清楚，看了很多文章还是不懂，不过因为属于设计思想，倒没怎么影响实际工作。今天又想起来，根据这两年的体会，做个总结',
        content: ArticleWord.rest,
        createTime: '2015-1-1',
        updateTime: '2017-1-1',
      },
      {
        id: 1,
        title: 'SpringdataJPA',
        author: 'dc',
        overview: ' Spring Data是spring-based的持久层框架，下面有10多个子项目，包括hbase、redis。在跟DB的交互中，\n' +
          '                Spring Data JPA算是除了Mybatis外最常用的了，很适合EE的开发场景',
        content: `
     <p>测试文章111</p>
    `,
        createTime: '2015-1-1',
        updateTime: '2017-1-1',
      },
      {
        id: 2,
        title: 'test',
        author: 'dc',
        overview: '这篇文章的简介222',
        content: `
     <p>测试文章2222</p>
    `,
        createTime: '2015-2-2',
        updateTime: '2017-2-2',
      }
    ];
    return {articles};
  }


  getArticle(id: number) {
    alert(id);
    return this.createDb().articles.forEach((article) => {
      if (id === article.id) {
        this.article = article;
      }
    });
  }

  getArticles() {
    alert(this.createDb());
    return this.createDb();
  }
}
