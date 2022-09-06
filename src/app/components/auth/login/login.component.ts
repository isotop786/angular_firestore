import { Login } from './../../../modal/Login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuthEmitter } from 'src/app/emitters/AuthEmitter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData : Login ={
    email:'',
    password:''
  };
  public errorMessage:string='';
  public authEmitter:AuthEmitter;

  constructor(
    private authService: AuthService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }

  public login({value, valid}:{value: Login, valid: boolean}) :void{
    if(!valid)
    {
      console.log("Invalid inputs");
    }
    else{
      // console.log(value);
      this.authService.login(value).subscribe(
        res=>{
          sessionStorage.setItem('token',res['token'])
          sessionStorage.setItem('user',res['user'])
          AuthEmitter.emiiter.emit(true)

          this.router.navigate(['/']).then(()=> window.location.reload())
        },
        err=>{
          AuthEmitter.emiiter.emit(false)
          console.log('error is : '+err.error.error);
          if(err.error.error ==undefined)
          {
            this.errorMessage="Network Error"
          }
          this.errorMessage = err.error.error;
          setTimeout(()=>{
            this.errorMessage ='';
          },2000)
        }
      )
    }
  }

}
