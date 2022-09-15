import { NotfoundComponent } from './components/notfound/notfound.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [

  {path:'', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'users', component: UsersComponent, canActivate:[AuthGuard]},
  {path:'posts', component: PostsComponent, canActivate:[AuthGuard]},
  {path:'posts/:id', component:PostComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: ReactiveformComponent},
  {path:'**', component:NotfoundComponent}
  // {path:'form', component: ReactiveformComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
