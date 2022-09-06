import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../../../modal/RegisterModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerData: RegisterModel={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirm_password:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  public register({value, valid}:{value: RegisterModel, valid: boolean}){

  }

}
