import { Post } from 'src/app/modal/Posts';
export interface PostsStateInterface{
  isLoading: boolean;
  posts: Post[],
  error: string | null
}
