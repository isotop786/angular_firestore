
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/modal/Posts';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  public currentPost: Post;
  public isUpdate: boolean = false;

  constructor(private postService : PostService, ) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts =>{
      this.posts = posts;
    })

    this.currentPost ={
      title:'',
      body:'',
      id:0,
    }

  }

  onNewPost(post :Post){
    this.posts.unshift(post)
  }

  getCurrent(post : Post){
    // console.log('current is : '+post.title);
    this.currentPost = post
  }

  public editPost(post:Post):void{
    // console.log(post);
    this.currentPost = post;
    this.isUpdate = true
  }

}
