import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,FormBuilder, Validators} from '@angular/forms';
import { CustomValidators } from './CustomValidators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
      private authService : AuthService,
      private router : Router
    ) {

    this.form = fb.group({
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['', [Validators.required,, Validators.minLength(6)]],
      confirmpassword:['',[Validators.required,]]
    },
    {
      validators : CustomValidators.Mustmatch('password','confirmpassword')

    }
    )
  }





  ngOnInit(): void {
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    if(this.form.status !=='INVALID')
    {
      // console.log(this.form.value);
      this.authService.register(this.form.value).subscribe(res=>{
        this.router.navigate(['/login'])
      })
    }

  }



}
