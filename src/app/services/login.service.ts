import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../modal/Login';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
  // observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // url : string = "http://165.227.33.145:5200/auth/signin";
  url : string = "https://nodejsbackend-maruf.herokuapp.com/auth/signin";
  url_local : string = "http://localhost:5200/auth/signin";

  constructor(private http:HttpClient,) { }

  ngOnInit(){
  }

  login(loginData : Login) : Observable<Login> {
    return this.http.post<Login>(this.url, loginData, httpOptions )
  }
}
