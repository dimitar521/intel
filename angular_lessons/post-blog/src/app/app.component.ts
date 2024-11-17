import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreatePostComponent } from "../create-post/create-post.component";
import { PostListComponent } from "../post-list/post-list.component";
import { CommonModule } from '@angular/common';
import { FirebaseModule } from './firebase.module';  // Import FirebaseModule
import { FirebasePostService } from './services/firebase-post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CreatePostComponent,
    PostListComponent,
    CommonModule,
    FirebaseModule  // Use the imported FirebaseModule here
  ],
  providers: [FirebasePostService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-blog';
}