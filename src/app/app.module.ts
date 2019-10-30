import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {IconsProviderModule} from './icons-provider.module';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {HomePageComponent} from './pages/home-page/home-page.component';

import {NzButtonModule} from 'ng-zorro-antd/button';
import {ArticlesPageComponent} from './pages/articles-page/articles-page.component';
import {ArticlePageComponent} from './pages/article-page/article-page.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselItemComponent} from './carousel-item/carousel-item.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesPageComponent,
    ArticlePageComponent,
    CarouselComponent,
    CarouselItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
