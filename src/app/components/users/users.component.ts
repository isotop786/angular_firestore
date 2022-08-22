import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/modal/User';
import { Meta, Title } from '@angular/platform-browser';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';

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

  constructor(private meta: Meta, private title: Title, private userService: UserService ) {
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

    this.userService.getUsers().subscribe( users => {
      this.users = users
      this.loaded = true;
    })


    this.showExtended = false;
    this.setCurrentClass();

    if(this.user.firstName !=='' && this.user.lastName !=='')
    {
      this.enabledAdd = true;
    }
  }


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

      this.userService.addUser(value)
      this.form.reset();
    }

  }
}
