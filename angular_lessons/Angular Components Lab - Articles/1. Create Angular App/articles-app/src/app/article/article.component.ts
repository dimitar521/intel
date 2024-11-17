import { Component, Input } from '@angular/core';
import { Article } from '../data/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {


  @Input() article: any;
  articleDescLen = 0;
  articleDescToShow = '';
  showReadMoreBtn = true;
  showHideBtn = false;
  imageButtonTitle = 'Show Image';
  imageIsShown = false;
  descToShow: any;
  symbols: number | undefined;

  constructor() {
   this.updateDescription();
  }

readMore() {
  this.articleDescLen += this.symbols;

  if (this.articleDescLen >= (this.articleDescLen?.length || 0)) {
    this.descToShow = this.articleDescLen || "";
    this.showReadMoreBtn = false;
    this.showHideBtn = true;

  }else {
    this.updateDescription();
  }
}
HideDesc() {
  this.articleDescLen = 0;
  this.descToShow = "";
}

readLess() {
  this.articleDescLen = 0;
  this.showReadMoreBtn = true;
  this.showHideBtn = false;
  this.updateDescription();

}
private updateDescription() {
  this.descToShow = this.articleDesc?.substring(0, this.articleDescLen) || "";

}
toggleImageVisibility() {
  this.imageIsShown = !this.imageIsShown;
  this.imageButtonTitle = this.imageIsShown ? " Hide image" : "Show image";
}
}

