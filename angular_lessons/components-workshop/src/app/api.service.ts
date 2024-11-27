import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Post } from './types/post';
import { Theme } from './types/theme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

     
  // Create a new theme
    createTheme(themeName: string, postText: string): Observable<Theme> {
      const { apiUrl } = environment;
      const payload = {
       themeName,
       postText,
       created_at: new Date().toISOString() // Optional: Include a timestamp
    };
    
      return this.http.post<Theme>(`${apiUrl}/themes`, payload);
  }

    getPosts(limit?: number) {
      const { apiUrl } = environment;
      let url = `${apiUrl}/posts`;
      if(limit){
        url += `?limit=${limit}`;
      }
      return this.http.get<Post[]>(url);
    }
    getThemes(){
      const { apiUrl } = environment;
      return this.http.get<Theme[]>(`${apiUrl}/themes`);
    }

    getSingleTheme(id: string) {
      const { apiUrl } = environment;
      return this.http.get<Theme>(`${apiUrl}/themes/${id}`)
    }
  }

