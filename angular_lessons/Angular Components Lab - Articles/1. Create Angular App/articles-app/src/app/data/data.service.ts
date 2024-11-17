import { Injectable } from "@angular/core";
import { data } from "./seed";

interface Article {
    title: string;
    description: string;
    author: string;
    imageUrl: string;
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    getData(): Article[] {
        return data.map(item => ({
            title: item.title,
            description: item.description,
            author: item.author,
            imageUrl: item.imageUrl
        }));
    }
}