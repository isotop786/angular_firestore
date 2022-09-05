import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/auth/login/login.component';


const token = sessionStorage.getItem('token');

const routes: Routes = [

  {path:'', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'users', component: UsersComponent, canActivate:[AuthGuard]},
  {path:'posts', component: PostsComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
