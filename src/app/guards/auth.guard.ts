import { AuthEmitter } from 'src/app/emitters/AuthEmitter';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private token : string ='';
  private isAuth: boolean;
  constructor(
    private authService: AuthService,
    private router: Router
    )
    { }
  // token:string = sessionStorage.getItem('token')
  canActivate(): boolean {
    if(this.authService.isLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['/login'])
      return false;
    }


  }

}
