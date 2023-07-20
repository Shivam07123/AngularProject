import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupUseromponent } from './signup-user/signup-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginUserComponent},
    {path:'signUp', component:SignupUseromponent},
    {path:'dashboard', component:DashboardComponent}

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
