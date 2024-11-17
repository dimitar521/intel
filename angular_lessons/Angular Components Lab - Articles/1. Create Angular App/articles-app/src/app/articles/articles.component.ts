import { Component, OnInit } from '@angular/core';
import { Article } from '../data/article.model';
import { data } from '../data/seed';
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-articles',
  standalone: true,
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
  imports: [ArticleComponent]
})
export class ArticlesComponent implements OnInit {
  articles : Article[] = [];


  ngOnInit(): void {
    this.articles = data.map(articleData => new Article(articleData.title, articleData.description, articleData.author, articleData.imageUrl));

}
}
