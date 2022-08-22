import { Post } from 'src/app/modal/Posts';
import { Component, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost : EventEmitter<Post> = new EventEmitter();

  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  addPost(title, body){
    if(!title){
      alert('Title can not be empty')
    }

    if(!body){
      alert('Post body can not be empty')
    }

    this.postService.savePost({title, body} as Post).subscribe(post=>{
      this.newPost.emit(post)
    })

    title='',
    body=''

  }

}
