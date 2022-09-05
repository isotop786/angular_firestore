import { Login } from './../../../modal/Login';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private loginService: LoginService,
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
      this.loginService.login(value).subscribe(
        res=>{
          sessionStorage.setItem('token',res['token'])
          sessionStorage.setItem('user',res['user'])

          this.router.navigate(['/'])
        },
        err=>{
          console.log('error is : '+err.error.error);
          if(err.error.error ==undefined)
          {
            this.errorMessage="Network Error"
          }
          this.errorMessage = err.error.error;
          setTimeout(()=>{
            this.errorMessage ='';
          },2500)
        }
      )
    }
  }

}
