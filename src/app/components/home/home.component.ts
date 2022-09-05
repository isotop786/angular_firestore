import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private token: string ;
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if(!sessionStorage.getItem('token'))
    {
      this.router.navigate(['/login']);
    }else{
      this.token = sessionStorage.getItem('token')
      // console.log(this.token);
      this.authService.verifyToken(this.token).subscribe(
        res=> {
          if(!res.isValidToken){
            this.router.navigate(['/login'])
          }
        },
        err=> {
          console.log(err);
          this.router.navigate(['/login'])
        }
      )
    }
  }

}
