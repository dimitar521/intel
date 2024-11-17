import { Component, OnInit } from '@angular/core';
import { Article } from '../data/article.model';
import { DataService } from '../data/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit{
  articles: Article[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.articles = this.dataService.getData();
  }

}
