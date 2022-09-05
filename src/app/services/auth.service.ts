import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../modal/Token';
import { TokenVerifyModel } from '../modal/TokenVerifyModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true,
  // observe: 'response' as 'response'
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private URL: string ="http://nodejsbackend-maruf.herokuapp.com/auth/verify/auth/isauth/"

  constructor(private http : HttpClient) { }

  checkAuthenticatedUser() : Observable<Token>
  {
    return this.http.get<Token>(this.URL)
  }

  verifyToken(token:string) : Observable<TokenVerifyModel>
  {
    return this.http.post<TokenVerifyModel>(environment.rootURL,{"token":token})
  }


}
