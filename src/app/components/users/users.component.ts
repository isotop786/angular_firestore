import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/modal/User';
import { Meta, Title } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User = {
    firstName:'',
    lastName:'',
    email:'',
  }

  loaded: boolean = false;
  showExtended: boolean = false;
  enabledAdd: boolean = false;
  currentClass = {};
  showUserForm: boolean = false;
  @ViewChild('userForm') form :any;

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Users Page. Listing all users' },
      { name: 'author', content: 'Maruf' },
      { name: 'keywords', content: 'Users, User page' },
    ]);

    this.setTitle('Users Page');


  }

  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email:'j@d.com',
        // image:'https://picsum.photos/id/13/600/600',
        isActive: true,
        balance: 300,
        registered: new Date('01/12/21 09:39:00'),
        hide:true,
      },
      {
        firstName: 'Janyy',
        lastName: 'Plimton',
        email: 'janny@p.com',
        // image:'https://picsum.photos/id/37/600/600',
        balance: 200,
        registered: new Date('05/12/21 19:39:00'),
        hide:true
      },
      {
        firstName: 'Marray',
        lastName: 'Copper',
        email:'marr@cooper.com',
        // image:'https://picsum.photos/id/137/600/600',
        isActive: true,
        balance: 600,
        registered: new Date('11/12/21 11:39:00'),
        hide:true
      },
    ];

    this.loaded = true;

    this.showExtended = false;
    this.setCurrentClass();
    // this.addUser({
    //   firstName:'David',
    //   lastName:'Jackson'
    // })

    if(this.user.firstName !=='' && this.user.lastName !=='')
    {
      this.enabledAdd = true;
    }
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName:'',
  //     lastName:'',
  //     email:'',
  //   }

  // }

  showExt() {
    this.showExtended = !this.showExtended;
  }

  public setCurrentClass() {
    this.currentClass = {
      'btn-success': this.enabledAdd,
    };
  }

  onSubmit({value, valid}: {value: User, valid: boolean}){

    if(!valid){
      console.log('Form is not valid');
    }else{
      value.balance = 0;
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value)
      this.form.reset();
    }
    // console.log(form);

    // const user : User ={
    //   firstName:form.controls['firstName'].value,
    //   lastName: form.controls['lastName'].value,
    //   email: form.controls['email'].value
    // }

    // user.balance = 0;
    // user.isActive = true;

    // this.users.unshift(user)

    // form.reset();
  }

  getError()
  {
    alert("error")
  }

}
