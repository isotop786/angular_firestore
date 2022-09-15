import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/modal/Posts';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // @Input() post: Post;
  // @Output() currentPost : EventEmitter<Post> = new EventEmitter();
  post : Post;
  // currentPost : Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location : Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    this.postService.getSinglePost(id).subscribe(post => {
      this.post = post
    })

    console.log(this.post);
  }



}
