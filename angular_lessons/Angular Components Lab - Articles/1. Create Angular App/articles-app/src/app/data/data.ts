import { Injectable } from "@angular/core";
import { Article } from "./article.model";
import { data } from "./seed";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    getData(): Article[] {
        return data.map(d => new Article(d.title, d.description, d.author, d.imageUrl));
    }
}