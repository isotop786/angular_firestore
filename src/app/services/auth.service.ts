import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../modal/Token';
import { TokenVerifyModel } from '../modal/TokenVerifyModel';
import { Login } from '../modal/Login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
  // observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class AuthService {
  url : string = "https://nodejsbackend-maruf.herokuapp.com/auth/signin";
  url_local : string = "http://localhost:5200/auth/signin";
  private URL: string ="http://nodejsbackend-maruf.herokuapp.com/auth/verify/auth/isauth/"
  private token: string
  public isValidToken: boolean = false;;

  constructor(private http : HttpClient) {
    this.token = sessionStorage.getItem('token')

    this.verifyToken(this.token).subscribe(res=>{
      if(res.isValidToken){
        this.isValidToken = true;
      }else{
        this.isValidToken = false;
      }
    },
    err=> this.isValidToken = false
    )
  }

  login(loginData : Login) : Observable<Login> {
    return this.http.post<Login>(this.url, loginData, httpOptions )
  }


  checkAuthenticatedUser() : Observable<Token>
  {
    return this.http.get<Token>(this.URL)
  }

  verifyToken(token:string) : Observable<TokenVerifyModel>
  {
    return this.http.post<TokenVerifyModel>('http://nodejsbackend-maruf.herokuapp.com/auth/verify/',{"token":token})
  }

  isLoggedIn() : boolean {
    return !!sessionStorage.getItem('token');
  }


}

