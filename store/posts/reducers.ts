import {createReducer, on} from '@ngrx/store'
import { PostsStateInterface } from './../../src/app/modal/PostsStateModel';
import * as PostActions from './action'
import * as postService from '../../src/app/services/post.service'

export const initialState: PostsStateInterface ={
  isLoading: false,
  posts: [],
  error : null
}

export const reducers =
createReducer(initialState, on(PostActions.getPosts, (state) =>(
  {...state, isLoading: true,  }
)))
