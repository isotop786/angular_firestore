import { Post } from 'src/app/modal/Posts';
import { Component, Input, OnInit, Output } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost : EventEmitter<Post> = new EventEmitter();
  @Input() currentPost : Post;
  @Input() isUpdate: boolean;

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    console.log('current post: '+this.currentPost);
  }

  addPost(title, body){
    if(!title){
      alert('Title can not be empty')
    }
   else if(!body){
      alert('Post body can not be empty')
    }
    else{
      this.postService.savePost({title, body} as Post).subscribe(post=>{
        this.newPost.emit(post)
      })
    }
  }

  updatePost(){
    console.log('updating post');
    this.postService.updatePost(this.currentPost).subscribe(post=>{
      console.log(post);
      this.currentPost={
        id:0,
        title:'',
        body:''
      }
      this.isUpdate = false;
    })
  }

}
