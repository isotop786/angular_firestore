import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthEmitter } from 'src/app/emitters/AuthEmitter';
import { Router, Route } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isAuth;

  constructor(
    private authService: AuthService,
    private router: Router,
    // private route: Route
  ) { }

  ngOnInit(): void {
    // console.log(sessionStorage.getItem('token'));
    if(sessionStorage.getItem('token') != null)
    {
      this.isAuth = true;
    }
    else{
      this.isAuth = false;
    }
  }

  public logout(){
    if(confirm('Are you sure to logout?')){
      sessionStorage.clear();
      this.router.navigate(['/login']).then(()=> window.location.reload())
    }
  }

}
