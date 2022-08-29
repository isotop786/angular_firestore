import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/modal/Posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() currentPost : EventEmitter<Post> = new EventEmitter();
  // currentPost : Post;
  constructor() { }

  ngOnInit(): void {
  }

  editPost(post:Post){
    this.currentPost.emit(post)
    // console.log(this.currentPost);
  }

}
