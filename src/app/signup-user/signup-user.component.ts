import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUseromponent {
  public userloginform !: FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router,   ){}

    ngOnInit(): void{
      this.userloginform = this.formbuilder.group({
        fullname :['', Validators.required],
        email: ['', Validators.required],
        mNumber: ['', Validators.required],
        password: ['', Validators.required]
      })
    }
    userlogin(){
      this.http.post<any>("http://localhost:3000/signupUser", this.userloginform.value).subscribe(res=>{
        alert("SignUp Succesfull !!");
        this.userloginform.reset();
        this.router.navigate(['login']);
      }, err=>{
        alert("Sometrhing went wrong !!")
      }
      )
    }

}


