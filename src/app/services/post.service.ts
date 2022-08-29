import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Post } from '../modal/Posts';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
}


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postURL: string = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(private http: HttpClient) { }

  ngOnInit(){

  }

  getPosts() : Observable <Post[]> {
     return this.http.get<Post[]>(this.postURL)
  }

  savePost(post: Post):Observable<Post>{
      return this.http.post<Post>(this.postURL, post, httpOption)
  }

  updatePost(post: Post):Observable<Post>
  {
    return this.http.put<Post>(this.postURL+post.id,post, httpOption)
  }

}
