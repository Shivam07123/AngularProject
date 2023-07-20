import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  loginform: any;

  constructor(private formbuilder:FormBuilder, private http :HttpClient, private router:Router){


      this.loginform = this.formbuilder.group({
          email : [''],
          password : ['']
      })
    }

  loginuser(): void{
    this.http.get<any>("http://localhost:3000/signupUser").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password
      })
      if(user){
        alert("Login Success");
        this.loginform.reset();
        this.router.navigate(['dashboard']);

      }else{
        alert("User Not Found!!");
      }

    },_err=>{
      alert("Something Went Wrong!!");
    }
    )

  }
}
