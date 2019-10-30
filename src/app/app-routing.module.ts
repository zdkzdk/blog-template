import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ArticlesPageComponent} from './pages/articles-page/articles-page.component';
import {ArticlePageComponent} from './pages/article-page/article-page.component';

const routes: Routes = [
  { path: 'home_page', component: HomePageComponent },
  { path: 'search_page', component: HomePageComponent },
  { path: 'artilist_page', component: ArticlesPageComponent },
  { path: 'dl_page', component: HomePageComponent },
  { path: 'mine_page', component: HomePageComponent },
  { path: 'article_page/:id', component: ArticlePageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
