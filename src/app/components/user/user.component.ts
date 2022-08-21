import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/modal/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() showExtended: boolean ;
  hasExt: boolean;

  constructor() { }

  ngOnInit(): void {

    console.log(this.hasExt);
  }

  toggleHide(user :User){
    user.hide = !user.hide
  }



}
