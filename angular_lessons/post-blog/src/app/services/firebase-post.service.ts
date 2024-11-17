import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class FirebasePostService {

  constructor(private db: AngularFireDatabase) {}

  createPost(postId: string, title: string, content: string): Observable<void> {
    return from(this.db.object('posts/' + postId).set({ title, content }));
  }

  getPosts(): Observable<any> {
    return this.db.list('posts').valueChanges();
  }

  updatePost(postId: string, title: string, content: string): Observable<void> {
    return from(this.db.object('posts/' + postId).update({ title, content }));
  }

  deletePost(postId: string): Observable<void> {
    return from(this.db.object('posts/' + postId).remove());
  }
}