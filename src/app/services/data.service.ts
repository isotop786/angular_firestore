import { Injectable } from '@angular/core';
import { User } from '../modal/User';
import { debounceTime, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  data: Observable<any>

  constructor() {
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
  }

  getData(){
    this.data =  new Observable(observer =>{
      setTimeout(()=>{
        observer.next(1)
      },1000)
    })


  }

  getUsers(): Observable<User[]>
  {
    return of(this.users);
  }

  addUser(user :User)
  {
    this.users.unshift(user)
  }
}
