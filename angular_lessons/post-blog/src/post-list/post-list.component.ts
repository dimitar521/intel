import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebasePostService } from '../app/services/firebase-post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit { 
  posts: any[] = [];

  constructor(private postService: FirebasePostService) {}

  ngOnInit(): void{
   this.postService.getPosts().subscribe(data => {
    this.posts = Object.keys(data).map(key => ({ id: key, ...data[key] }));
    });
  }

   deletePost(postId: string) {
    this.postService.deletePost(postId).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== postId);
      alert('Post deleted successfully');
    });
   }
  }
  
